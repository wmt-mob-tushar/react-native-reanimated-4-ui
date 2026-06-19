import { useState } from 'react';
import { View, Pressable, ScrollView } from 'react-native';
import * as DropdownMenu from 'zeego/dropdown-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import { Screen, Text, BarChart, StreakCard } from '@/component';
import { colors } from '@/theme';
import { skillCategories, rangeOptions, currentIndex, RangeKey } from '@/data/skillProgress';
import { styles } from './styles';

const Stats = () => {
  const [catIndex, setCatIndex] = useState(0);
  const [range, setRange] = useState<RangeKey>('week');
  const [activeBar, setActiveBar] = useState(() => currentIndex('week'));

  const category = skillCategories[catIndex];
  const data = category.ranges[range];
  const rangeLabel = rangeOptions.find(o => o.value === range)?.label ?? '';

  const selectCategory = (i: number) => {
    setCatIndex(i);
    setActiveBar(currentIndex(range));
  };

  const selectRange = (key: RangeKey) => {
    setRange(key);
    setActiveBar(currentIndex(key));
  };

  return (
    <Screen scroll contentContainerStyle={styles.content}>
      <View style={styles.screenHeader}>
        <Text tx="statsScreen:analytics" style={styles.screenTitle} />
        <Pressable style={styles.bellBtn} hitSlop={8}>
          <Icon name="notifications-outline" size={20} color={colors.primary} />
        </Pressable>
      </View>

      <StreakCard />

      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text tx="statsScreen:title" style={styles.title} />

          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Pressable style={styles.dropdown}>
                <Text text={rangeLabel} style={styles.dropdownText} />
                <Icon name="chevron-down" size={14} color={colors.primary} />
              </Pressable>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              {rangeOptions.map(opt => (
                <DropdownMenu.Item key={opt.value} onSelect={() => selectRange(opt.value)}>
                  <DropdownMenu.ItemTitle>{opt.label}</DropdownMenu.ItemTitle>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </View>

        <Text text={`Avg improvement ${rangeLabel.toLowerCase()}`} style={styles.subtitle} />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipsRow}>
          {skillCategories.map((c, i) => {
            const active = i === catIndex;
            return (
              <Pressable
                key={c.key}
                onPress={() => selectCategory(i)}
                style={[styles.chip, active ? styles.chipActive : styles.chipInactive]}>
                <Text text={c.label} style={[styles.chipText, active && styles.chipTextActive]} />
              </Pressable>
            );
          })}
        </ScrollView>

        <BarChart data={data} activeIndex={activeBar} onSelect={setActiveBar} />
      </View>
    </Screen>
  );
};

export default Stats;

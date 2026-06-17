import { useState } from 'react';
import { View, Pressable, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
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
          <Dropdown
            data={rangeOptions}
            labelField="label"
            valueField="value"
            value={range}
            onChange={item => selectRange(item.value)}
            style={styles.dropdown}
            selectedTextStyle={styles.dropdownText}
            itemTextStyle={styles.dropdownText}
            containerStyle={styles.dropdownList}
            activeColor="rgba(28, 39, 76, 0.06)"
            maxHeight={160}
            dropdownPosition="bottom"
            renderRightIcon={() => <Icon name="chevron-down" size={14} color={colors.primary} />}
          />
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

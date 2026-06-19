import { useCallback, useMemo } from 'react';
import { FlatList, View, Pressable, StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { BlurView } from '@sbaiahmed1/react-native-blur';
import { Text, CircularProgress, StepIndicator } from '@/component';
import { TxKeyPath } from '@/i18n';
import { colors, assets } from '@/theme';
import { lessonsData } from '@/data/lessons';
import { styles } from './styles';

type LessonItem = (typeof lessonsData)[number];
type Status = 'completed' | 'active' | 'locked';

const TOTAL = lessonsData.length;
const PROGRESS = 1.3;

const Lesson = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const onBack = useCallback(() => navigation.goBack(), [navigation]);

  const renderItem = useCallback(({ item, index }: { item: LessonItem; index: number }) => {
    const fill = Math.max(0, Math.min(1, PROGRESS - index));
    const status: Status = fill >= 1 ? 'completed' : fill > 0 ? 'active' : 'locked';
    const isFaded = index > Math.floor(PROGRESS) + 1;
    const btnKey: TxKeyPath =
      status === 'completed'
        ? 'lessonsScreen:replay'
        : status === 'active'
          ? 'lessonsScreen:continue'
          : 'lessonsScreen:startLesson';

    return (
      <View style={styles.row}>
        <StepIndicator index={index} total={TOTAL} value={PROGRESS} />

        <View style={styles.cardCol}>
          <View style={[styles.card, { backgroundColor: item.bg }, isFaded && styles.cardFaded]}>
            <View style={styles.cardHeader}>
              <Text tx={item.titleKey} style={styles.cardTitle} />
              <View style={styles.durationBadge}>
                <assets.WatchIcon width={13} height={13} style={styles.badgeIcon} />
                <Text text={item.duration} style={styles.durationText} />
              </View>
            </View>
            <View style={styles.cardBody}>
              <Text tx={item.descKey} numberOfLines={2} style={styles.cardDesc} />
              <Pressable style={styles.playBtn} disabled={status !== 'active'}>
                <Text tx={btnKey} style={styles.playBtnText} />
                <View style={styles.playCircle}>
                  <Icon name="play" size={12} color={colors.white} style={styles.playIcon} />
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    );
  }, []);

  const ListHeader = useMemo(
    () => (
      <View style={[styles.header, { paddingTop: insets.top + 14 }]}>
        <assets.BackgroundVector width={446.55} height={262.96} color="#FFFFFF33" style={styles.bgArc} pointerEvents="none" />

        <View style={styles.illustration} pointerEvents="none">
          <assets.LearnPageIllustrate width={280.75} height={292} />
        </View>

        <Pressable style={styles.backBtn} hitSlop={8} onPress={onBack}>
          <Icon name="arrow-back" size={24} color={colors.primary} />
        </Pressable>

        <Text tx="lessonsScreen:title" style={styles.lettersLabel} />
        <Text tx="lessonsScreen:subtitle" style={styles.title} />

        <View style={styles.capsuleRow}>
          <View style={styles.capsule}>
            <Icon name="book-outline" size={13} color={colors.primary} style={styles.capsuleIcon} />
            <Text tx="lessonsScreen:lessons" style={styles.capsuleText} />
          </View>
          <View style={styles.capsule}>
            <Icon name="time-outline" size={13} color={colors.primary} style={styles.capsuleIcon} />
            <Text tx="lessonsScreen:duration" style={styles.capsuleText} />
          </View>
        </View>

        <View style={styles.banner}>
          <BlurView
            style={StyleSheet.absoluteFill}
            blurType="light"
            blurAmount={43}
            overlayColor="rgba(255, 255, 255, 0.4)"
          />
          <assets.RobotSvg width={44} height={44} />
          <View style={styles.bannerTextCol}>
            <Text tx="lessonsScreen:aiBuddyLabel" style={styles.bannerSubtitle} />
            <Text tx="lessonsScreen:aiBuddyMessage" style={styles.bannerTitle} />
          </View>
          <View style={styles.ringCircle}>
            <CircularProgress
              size={48}
              strokeWidth={8}
              progress={Math.round((PROGRESS / TOTAL) * 100)}
              color={colors.progressGreen}
              backgroundColor={colors.timelineGray}
            />
          </View>
        </View>
      </View>
    ),
    [insets.top, onBack],
  );

  return (
    <View style={styles.root}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.mint} translucent />

      <FlatList
        data={lessonsData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={ListHeader}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews
      />
    </View>
  );
};

export default Lesson;

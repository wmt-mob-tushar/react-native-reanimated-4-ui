import React, { useState } from 'react';
import {
  View,
  Pressable,
  ScrollView,
  Modal,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  FadeInDown,
  FadeIn,
  ZoomIn,
} from 'react-native-reanimated';

import {
  Screen,
  Text,
  CircularProgress,
  StepIndicator,
  AnimatedPressable,
} from '@/component';
import { colors, spacing, assets } from '@/theme';
import { translate } from '@/i18n/translate';
import { lessonsData, LessonItem } from '@/data/lessons';

import { styles } from './styles';

// LessonCard defined directly inside the screen file (non-reusable)
interface LessonCardProps {
  item: LessonItem;
  onPress: () => void;
}

const LessonCard = ({ item, onPress }: LessonCardProps) => {
  const isFaded = item.status === 'faded';

  return (
    <AnimatedPressable
      onPress={onPress}
      style={[
        styles.cardContainer,
        { backgroundColor: item.bg },
        isFaded && styles.fadedCard,
      ]}
    >
      <View style={styles.cardHeader}>
        <Text text={translate(item.titleKey)} style={styles.cardTitle} />
        <View style={styles.durationBadge}>
          <assets.WatchIcon width={13} height={13} style={styles.badgeClockIcon} />
          <Text text={item.duration} style={styles.durationText} />
        </View>
      </View>

      <Text text={translate(item.descKey)} style={styles.cardDescription} />

      <View style={styles.cardFooter}>
        <View style={styles.playButton}>
          <Text text={translate(item.buttonTextKey)} style={styles.playButtonText} />
          <View style={styles.playIconContainer}>
            <Icon name="play" size={10} color={colors.palette.neutral100} style={styles.playIcon} />
          </View>
        </View>
      </View>
    </AnimatedPressable>
  );
};

const Home = () => {
  const insets = useSafeAreaInsets();
  const [selectedLesson, setSelectedLesson] = useState<LessonItem | null>(null);
  const letterBounce = useSharedValue(0);

  const handleLessonPress = (lesson: LessonItem) => {
    setSelectedLesson(lesson);
    letterBounce.value = 0;
    letterBounce.value = withSpring(1, { damping: 4, stiffness: 80 });
  };

  const animatedLetterStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: letterBounce.value },
        { translateY: withTiming(letterBounce.value * -15, { duration: 250 }) },
      ],
    };
  });

  return (
    <Screen safeAreaEdges={[]} style={styles.screenBg}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.palette.mint} translucent />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* GREEN HEADER CONTAINER */}
        <View style={[styles.headerContainer, { paddingTop: insets.top + spacing.sm }]}>
          {/* Back Button */}
          <Pressable style={styles.backBtnCircle}>
            <Icon name="arrow-back" size={22} color={colors.palette.primary} />
          </Pressable>

          {/* Header Text & Badge & Image Section */}
          <View style={styles.headerHeroRow}>
            <View style={styles.headerTextCol}>
              <Text style={styles.lettersCategoryText}>
                {translate('lessonsScreen:title')}
              </Text>
              <Text style={styles.lettersMainHeading}>
                {translate('lessonsScreen:subtitle')}
              </Text>

              {/* Capsules */}
              <View style={styles.capsuleRow}>
                <View style={styles.metaCapsule}>
                  <Icon name="book-outline" size={13} color={colors.palette.primary} style={styles.metaIcon} />
                  <Text style={styles.metaText}>{translate('lessonsScreen:lessons')}</Text>
                </View>
                <View style={styles.metaCapsule}>
                  <Icon name="time-outline" size={13} color={colors.palette.primary} style={styles.metaIcon} />
                  <Text style={styles.metaText}>{translate('lessonsScreen:duration')}</Text>
                </View>
              </View>
            </View>

            {/* Illustration */}
            <View style={styles.illustrateWrapper}>
              <assets.LearnPageIllustrate width={135} height={135} />
            </View>
          </View>

          {/* AI BUDDY CARD */}
          <Animated.View
            entering={ZoomIn.delay(300).duration(600)}
            style={styles.aiBuddyCard}
          >
            <View style={styles.aiAvatarWrapper}>
              <assets.RobotSvg width={40} height={40} />
            </View>
            <View style={styles.aiTextContainer}>
              <Text style={styles.aiSubtitle}>{translate('lessonsScreen:aiBuddyLabel')}</Text>
              <Text style={styles.aiTitle}>{translate('lessonsScreen:aiBuddyMessage')}</Text>
            </View>
            <CircularProgress
              size={44}
              strokeWidth={4.5}
              progress={12}
              color={colors.palette.progressGreen}
              backgroundColor="rgba(28, 39, 76, 0.1)"
            />
          </Animated.View>
        </View>

        {/* TIMELINE & CARDS SECTION */}
        <View style={styles.timelineSectionContainer}>
          {lessonsData.map((item, index) => {
            // Determine connector line styles
            return (
              <Animated.View
                key={item.id}
                entering={FadeInDown.delay(index * 150).duration(600)}
                style={styles.timelineRow}
              >
                {/* Step Indicator */}
                <StepIndicator
                  status={item.status}
                  index={index}
                  isFirst={index === 0}
                  isLast={index === lessonsData.length - 1}
                />

                {/* Card Column */}
                <View style={styles.cardCol}>
                  <LessonCard
                    item={item}
                    onPress={() => handleLessonPress(item)}
                  />
                </View>
              </Animated.View>
            );
          })}
        </View>
      </ScrollView>

      {/* INTERACTIVE LESSON MODAL */}
      <Modal
        animationType="fade"
        transparent
        visible={selectedLesson !== null}
        onRequestClose={() => setSelectedLesson(null)}
      >
        <View style={styles.modalBackdrop}>
          <Animated.View
            entering={FadeIn.duration(200)}
            style={styles.modalOverlay}
          />
          <Animated.View
            entering={ZoomIn.duration(300)}
            style={[styles.modalContentCard, { backgroundColor: selectedLesson?.bg }]}
          >
            {/* Close Button */}
            <Pressable style={styles.modalCloseBtn} onPress={() => setSelectedLesson(null)}>
              <Icon name="close" size={24} color={colors.palette.primary} />
            </Pressable>

            {/* Giant bouncing Letter */}
            <Animated.View style={[styles.giantLetterCircle, animatedLetterStyle]}>
              <Text style={styles.giantLetterText}>{selectedLesson?.letter}</Text>
            </Animated.View>

            <Text style={styles.modalLessonTitle}>
              {selectedLesson && translate(selectedLesson.titleKey)}
            </Text>
            <Text style={styles.modalLessonDesc}>
              {selectedLesson && translate(selectedLesson.descKey)}
            </Text>

            <View style={styles.modalStatsRow}>
              <View style={styles.modalStatBadge}>
                <Icon name="time-outline" size={16} color={colors.palette.primary} style={styles.metaIcon} />
                <Text style={styles.modalStatText}>{selectedLesson?.duration}</Text>
              </View>
              <View style={styles.modalStatBadge}>
                <Icon name="ribbon-outline" size={16} color={colors.palette.primary} style={styles.metaIcon} />
                <Text style={styles.modalStatText}>+20 XP</Text>
              </View>
            </View>

            <Pressable
              style={styles.modalActionBtn}
              onPress={() => {
                // Bounce it again!
                letterBounce.value = 0;
                letterBounce.value = withSpring(1.2, { damping: 3, stiffness: 90 });
              }}
            >
              <Icon name="volume-high" size={20} color={colors.palette.neutral100} style={styles.modalActionIcon} />
              <Text style={styles.modalActionBtnText}>Hear Sound</Text>
            </Pressable>
          </Animated.View>
        </View>
      </Modal>
    </Screen>
  );
};

export default Home;

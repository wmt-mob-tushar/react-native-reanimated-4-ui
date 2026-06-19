import { Pressable, StyleSheet, View } from 'react-native';
import { Blur, Canvas, Circle, ColorMatrix, Group, Paint, RoundedRect } from '@shopify/react-native-skia';
import { useUnistyles } from 'react-native-unistyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from '@/component/ui/Text';
import { LearnCard as LearnCardData } from '@/data/learn';
import { assets, colors } from '@/theme';
import { styles } from './styles';

// Alpha threshold — turns the blurred shapes back into solid ones, merging the
// edge circles into the card body with smooth necks (the metaball bridge).
const GOO = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 40, -20];

type Props = {
  card: LearnCardData;
  first: boolean;
  last: boolean;
  onStart: () => void;
};

export const LearnCard = ({ card, first, last, onStart }: Props) => {
  const { theme } = useUnistyles();
  const Illustration = assets[card.illustration];

  const E = theme.rw(24);
  const RAD = theme.rw(27);
  const OFF = theme.rh(85);
  const bodyW = theme.rw(280);
  const leftB = first ? 0 : E;
  const rightB = last ? 0 : E;
  const W = bodyW + leftB + rightB;
  const H = theme.rh(315);
  const R = theme.rf(28);
  const cy = H / 2;

  return (
    <View style={{ width: W, height: H, marginRight: last ? 0 : -theme.rw(8) }}>
      <Canvas style={StyleSheet.absoluteFill}>
        <Group
          layer={
            <Paint>
              <Blur blur={theme.rw(11)} />
              <ColorMatrix matrix={GOO} />
            </Paint>
          }>
          <RoundedRect x={leftB} y={0} width={bodyW} height={H} r={R} color={card.bg} />
          {!first && <Circle cx={0} cy={cy - OFF} r={RAD} color={card.bg} />}
          {!first && <Circle cx={0} cy={cy + OFF} r={RAD} color={card.bg} />}
          {!last && <Circle cx={W} cy={cy - OFF} r={RAD} color={card.bg} />}
          {!last && <Circle cx={W} cy={cy + OFF} r={RAD} color={card.bg} />}
        </Group>
      </Canvas>

      <View style={[styles.content, { left: leftB, width: bodyW }]}>
        <View style={styles.topRow}>
          <View style={styles.iconCircle}>
            <Icon name={card.icon} size={26} color={colors.primary} />
          </View>
          <View style={styles.metaRow}>
            <View style={styles.metaPill}>
              <Icon name="book-outline" size={12} color={colors.primary50} />
              <Text text={`${card.lessons} lessons`} style={styles.metaText} />
            </View>
            <View style={styles.metaPill}>
              <Icon name="time-outline" size={12} color={colors.primary50} />
              <Text text={`${card.minutes} min`} style={styles.metaText} />
            </View>
          </View>
        </View>

        <Text text={card.categoryLabel} style={styles.category} />
        <Text text={card.title} numberOfLines={2} style={styles.title} />

        <View style={styles.illoWrap} pointerEvents="none">
          <assets.BackgroundVector style={styles.illoBg} width="100%" height="100%" color="#FFFFFF80" />
          <Illustration width="100%" height="100%" />
        </View>

        <Pressable style={styles.startBtn} onPress={onStart}>
          <Text tx="learnSection:startLearning" style={styles.startText} />
          <View style={styles.playCircle}>
            <Icon name="play" size={14} color={colors.white} style={styles.playIcon} />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

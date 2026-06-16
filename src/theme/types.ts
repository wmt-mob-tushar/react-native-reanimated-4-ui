import { colors } from './colors';
import { spacing } from './spacing';
import { timing } from './timing';
import { typography } from './typography';

export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type Timing = typeof timing;
export type Typography = typeof typography;

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
  timing: Timing;
}

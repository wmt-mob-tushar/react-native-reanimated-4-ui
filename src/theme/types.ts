import { colors as colorsLight } from './colors';
import { colors as colorsDark } from './colorsDark';
import { spacing } from './spacing';
import { timing } from './timing';
import { typography } from './typography';

export type Colors = typeof colorsLight | typeof colorsDark;
export type Spacing = typeof spacing;
export type Timing = typeof timing;
export type Typography = typeof typography;

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  typography: Typography;
  timing: Timing;
  isDark: boolean;
}

export type TextPreset = 'default' | 'heading' | 'subheading' | 'label';
export type TextWeight = 'normal' | 'medium' | 'bold';

const palette = {
  primary: '#1C274C',
  primaryAlt: '#2F3656',

  white: '#FFFFFF',
  black: '#000000',

  primary80: '#1C274CCC',
  primary60: '#1C274C99',
  primary40: '#1C274C66',
  primary24: '#1C274C3D',
  primary12: '#1C274C1F',
  primary08: '#1C274C14',
  primary05: '#1C274C0D',

  blue: '#E3E1F6',
  sky: '#CADDF7',
  lavender: '#E5CDFF',
  pink: '#FFE9E9',
  rose: '#F78EA5',
  lime: '#E9FF72',
  green: '#DFF28A',
  mint: '#DCEA8F',

  amber: '#FDCB50',
  orange: '#FD8F01',
  red: '#D80027',
  greenStrong: '#5AA02B',
  blueStrong: '#3D88B3',

  surface: '#F5F5F5',
  surfaceAlt: '#F4F3F3',

  neutral100: '#FFFFFF',
  secondary500: '#2F3656',
} as const;

export const colors = {
  palette,
  transparent: '#00000000',
  text: palette.primary,
  textDim: palette.primary60,
  textMuted: palette.primary40,
  background: palette.white,
  backgroundAlt: palette.surface,
  border: palette.primary12,
  tint: palette.primary,
  tintInactive: palette.primary40,
  separator: palette.primary08,
  error: palette.red,
  errorBackground: '#D800271F',

  success: palette.greenStrong,
} as const;

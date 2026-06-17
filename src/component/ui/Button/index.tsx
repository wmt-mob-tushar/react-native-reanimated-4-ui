import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { TxKeyPath } from '@/i18n';
import { useTranslate } from '@/i18n/translate';
import { colors } from '@/theme';
import { ButtonVariant, styles } from './styles';

export interface ButtonProps extends PressableProps {
  tx?: TxKeyPath;
  text?: string;
  variant?: ButtonVariant;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button = (props: ButtonProps) => {
  const { tx, text, variant = 'primary', loading, disabled, style, textStyle, ...rest } = props;
  const translate = useTranslate();
  const label = tx ? translate(tx) : text;

  const isOutline = variant === 'outline';
  const spinnerColor = isOutline ? colors.tint : colors.neutral100;

  return (
    <Pressable
      disabled={disabled || loading}
      style={[styles.base, styles[variant], (disabled || loading) && styles.disabled, style]}
      {...rest}>
      {loading ? (
        <ActivityIndicator color={spinnerColor} />
      ) : (
        <Text style={[styles.label, isOutline && styles.labelOutline, textStyle]}>{label}</Text>
      )}
    </Pressable>
  );
};

import React from 'react';
import { Text, TextProps } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

interface ThemedTextProps extends TextProps {
  variant?: 'h1' | 'h2' | 'body' | 'bold' | 'medium';
}

const ThemedText: React.FC<ThemedTextProps> = ({ variant = 'body', style, ...props }) => {
  const { typography, colors } = useTheme();

  const getFontStyle = () => {
    switch (variant) {
      case 'h1':
        return { fontFamily: typography.fontFamily.extraBold, fontSize: typography.fontSize.h1 };
      case 'h2':
        return { fontFamily: typography.fontFamily.bold, fontSize: typography.fontSize.h2 };
      case 'bold':
        return { fontFamily: typography.fontFamily.bold, fontSize: typography.fontSize.body };
      case 'medium':
        return { fontFamily: typography.fontFamily.medium, fontSize: typography.fontSize.body };
      default:
        return { fontFamily: typography.fontFamily.regular, fontSize: typography.fontSize.body };
    }
  };

  return <Text style={[getFontStyle(), style, { color: colors.text }]} {...props} />;
};

export default ThemedText;

import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';

const ThemedView: React.FC<ViewProps> = ({ style, ...props }) => {
  const { colors, spacing } = useTheme();

  return (
    <View
      style={[
        styles.container,
        style,
        { backgroundColor: colors.background, padding: spacing.medium },
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // Apply the padding using design system's spacing (set in `useTheme`)
    borderColor: '#4050E7', // Optional: add a primary color border
    borderWidth: 1,
    borderRadius: 8,  // Adjust this for rounded corners if desired
  },
});

export default ThemedView;

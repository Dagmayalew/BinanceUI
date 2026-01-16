import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

export function Row({
  children,
  style,
  align = 'center',
  justify = 'space-between',
}: {
  children: React.ReactNode;
  style?: ViewStyle;
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
}) {
  return <View style={[styles.row, { alignItems: align, justifyContent: justify }, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

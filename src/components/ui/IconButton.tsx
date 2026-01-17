import React from 'react';
import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors, spacing, typography } from '../../theme';

export function IconButton({
  name,
  label,
  size = 34,
  style,
  onPress,
  badge,
}: {
  name?: string;
  label?: string;
  size?: number;
  style?: ViewStyle;
  onPress?: () => void;
  badge?: string;
}) {
  return (
    <Pressable onPress={onPress} style={[styles.btn, { width: size, height: size, borderRadius: size / 2 }, style]}>
      {name ? (
        <Icon name={name} size={size * 0.5} color={colors.text} />
      ) : (
        <Text style={styles.label}>{label}</Text>
      )}
      {badge ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: typography.size.sm,
    color: colors.text,
    fontFamily: typography.fontFamily.medium,
  },
  badge: {
    position: 'absolute',
    right: -2,
    top: -2,
    minWidth: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
  badgeText: {
    fontSize: 10,
    color: colors.text,
    fontFamily: typography.fontFamily.bold,
  },
});

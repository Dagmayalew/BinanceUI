import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../theme';

export function IconButton({ name, onPress }: { name: string; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Icon name={name} size={18} color={colors.text} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

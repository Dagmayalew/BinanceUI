import React from 'react';
import { View } from 'react-native';

export function Spacer({ size, horizontal = false }: { size: number; horizontal?: boolean }) {
  return <View style={horizontal ? { width: size } : { height: size }} />;
}

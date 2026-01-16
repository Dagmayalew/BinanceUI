import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { colors, typography } from '../../theme';
import type { RootStackParamList } from '../../types/navigation';

export default function SplashScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('MainTabs');
    }, 1200);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoMark}>
        <View style={[styles.diamond, styles.diamondTop]} />
        <View style={styles.diamondCenter} />
        <View style={[styles.diamond, styles.diamondLeft]} />
        <View style={[styles.diamond, styles.diamondRight]} />
        <View style={[styles.diamond, styles.diamondBottom]} />
      </View>
      <Text style={styles.logo}>BINANCE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: typography.size.xl,
    fontFamily: typography.fontFamily.bold,
    color: colors.yellow,
    marginTop: 12,
    letterSpacing: 2,
  },
  logoMark: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  diamond: {
    width: 16,
    height: 16,
    backgroundColor: colors.yellow,
    transform: [{ rotate: '45deg' }],
    position: 'absolute',
  },
  diamondCenter: {
    width: 14,
    height: 14,
    backgroundColor: colors.yellow,
    transform: [{ rotate: '45deg' }],
  },
  diamondTop: {
    top: 2,
  },
  diamondBottom: {
    bottom: 2,
  },
  diamondLeft: {
    left: 2,
  },
  diamondRight: {
    right: 2,
  },
});

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { IconButton } from '../../../components/ui/IconButton';
import { colors, spacing, typography } from '../../../theme';
import type { RootStackParamList } from '../../../types/navigation';

export function OpportunityHeader() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View>
       {/* <View style={styles.highlightPill}>
          <Text style={styles.highlightText}>Highlight</Text>
        </View> */}
    <View style={styles.row}>
      
      <View style={styles.leftGroup}>
        <IconButton name="chevron-left" size={28} onPress={() => navigation.navigate('MainTabs')} />
       
      </View>
      <Text style={styles.title}>Opportunity</Text>
      <View style={styles.icons}>
        <View style={styles.qrWrap}>
          <IconButton name="qrcode" size={28} />
          <View style={styles.qrDot} />
        </View>
        <IconButton name="bell-outline" size={28} style={styles.iconSpacing} />
        <IconButton name="message-text-outline" size={28} style={styles.iconSpacing} />
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  highlightPill: {
    maxWidth: 100,  
    backgroundColor: '#BDBDBD',
    borderRadius: 14,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    marginLeft: spacing.sm,
  },
  highlightText: {
    color: colors.surface,
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.medium,
  },
  title: {
    fontSize: typography.size.lg,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginLeft: spacing.sm,
  },
  qrWrap: {
    position: 'relative',
  },
  qrDot: {
    position: 'absolute',
    right: 2,
    top: 2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.yellow,
  },
});

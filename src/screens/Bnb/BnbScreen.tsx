import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screen } from '../../components/layout/Screen';
import { colors, spacing, typography } from '../../theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { RootStackParamList } from '../../types/navigation';

export default function BnbScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title}>BNB</Text>
        <Text style={styles.subtle}>Mock details screen</Text>
      </View>
      <View style={styles.bottomBar}>
        {[
          { label: 'Opportunity', icon: 'home-outline' },
          { label: 'Calendar', icon: 'calendar-blank-outline' },
          { label: 'Portfolio', icon: 'briefcase-outline' },
        ].map((item, index) => (
          <Pressable
            key={item.label}
            style={styles.bottomItem}
            onPress={() => {
              if (item.label === 'Opportunity') {
                navigation.navigate('OpportunityTabs', { screen: 'Opportunity' });
              }
              if (item.label === 'Portfolio') {
                navigation.navigate('OpportunityTabs', { screen: 'Portfolio' });
              }
            }}
          >
            <Icon name={item.icon} size={20} color={index === 2 ? colors.text : colors.muted} />
            <Text style={[styles.bottomLabel, index === 2 ? styles.bottomActive : null]}>{item.label}</Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  title: {
    fontSize: typography.size.xl,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
  subtle: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginTop: spacing.sm,
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
  },
  bottomItem: {
    alignItems: 'center',
  },
  bottomLabel: {
    fontSize: typography.size.xs,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  bottomActive: {
    color: colors.text,
    fontFamily: typography.fontFamily.medium,
  },
});

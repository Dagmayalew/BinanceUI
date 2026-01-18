import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Screen } from '../../components/layout/Screen';
import { Card } from '../../components/ui/Card';
import { IconButton } from '../../components/ui/IconButton';
import { colors, spacing, typography } from '../../theme';
import { useBalanceStore } from '../../store/balanceStore';

export default function AddFundsScreen() {
  const navigation = useNavigation();
  const addFunds = useBalanceStore((state) => state.addFunds);
  const [amount, setAmount] = useState('100');
  const amountValue = useMemo(() => Number(amount.replace(/[^0-9.]/g, '')) || 0, [amount]);
  return (
    <Screen>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconButton name="chevron-left" size={28} onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Add Funds</Text>
          <View style={styles.headerSpacer} />
        </View>
        <Card>
          <Text style={styles.stepTitle}>Select Method</Text>
          <View style={styles.stepRow}>
            <View style={styles.stepBadge} />
            <Text style={styles.stepText}>Bank Transfer</Text>
          </View>
          <View style={styles.stepRow}>
            <View style={[styles.stepBadge, styles.stepBadgeMuted]} />
            <Text style={styles.stepText}>Card</Text>
          </View>
        </Card>
        <View style={styles.spacer} />
        <Card>
          <Text style={styles.stepTitle}>Enter Amount</Text>
          <View style={styles.inputRow}>
            <Text style={styles.currency}>$</Text>
            <TextInput
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              placeholder="0.00"
              placeholderTextColor={colors.muted}
              style={styles.input}
            />
          </View>
          <Text style={styles.helper}>Estimated arrival: Instant</Text>
        </Card>
        <View style={styles.spacer} />
        <Pressable
          style={[styles.confirmCard, amountValue <= 0 && styles.confirmDisabled]}
          onPress={() => {
            if (amountValue <= 0) {
              return;
            }
            addFunds(amountValue);
            navigation.goBack();
          }}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </Pressable>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.size.lg,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
  headerSpacer: {
    width: 28,
  },
  stepTitle: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
    marginBottom: spacing.md,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  stepBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.yellow,
    marginRight: spacing.sm,
  },
  stepBadgeMuted: {
    backgroundColor: colors.border,
  },
  stepText: {
    fontSize: typography.size.sm,
    color: colors.text,
  },
  amount: {
    fontSize: typography.size.xl,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currency: {
    fontSize: typography.size.xl,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: typography.size.xl,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
    paddingVertical: 0,
  },
  helper: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  spacer: {
    height: spacing.lg,
  },
  confirmCard: {
    alignItems: 'center',
    backgroundColor: colors.yellow,
    paddingVertical: spacing.md,
  },
  confirmDisabled: {
    backgroundColor: colors.border,
  },
  confirmText: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
});

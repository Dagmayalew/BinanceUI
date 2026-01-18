import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Screen } from '../../components/layout/Screen';
import { IconButton } from '../../components/ui/IconButton';
import { colors, spacing, typography } from '../../theme';
import { getMessages, seedMockConversation, markSupportAsRead } from '../../db/messageRepo';
import { useNavigation } from '@react-navigation/native';

export default function ChatListScreen() {
  const navigation = useNavigation();
  const [lastMessage, setLastMessage] = useState('');

  const load = useCallback(async () => {
    await seedMockConversation();
    const messages = await getMessages();
    const last = messages[messages.length - 1];
    setLastMessage(last ? last.text : '');
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Screen>
      <View style={styles.header}>
        <IconButton name="chevron-left" size={28} onPress={() => navigation.goBack()} />
        <Text style={styles.title}>Messages</Text>
        <View style={styles.headerSpacer} />
      </View>
      <Pressable
        style={styles.row}
        onPress={async () => {
          await markSupportAsRead();
          navigation.navigate('Chat');
        }}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>B</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.name}>Binance Support</Text>
          <Text style={styles.preview} numberOfLines={1}>
            {lastMessage || 'Start a conversation'}
          </Text>
        </View>
        <Text style={styles.time}>Now</Text>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxxl,
    paddingBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: typography.size.lg,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
  headerSpacer: {
    width: 28,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  avatarText: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.bold,
    color: colors.text,
  },
  body: {
    flex: 1,
  },
  name: {
    fontSize: typography.size.md,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
  preview: {
    fontSize: typography.size.sm,
    color: colors.muted,
    marginTop: spacing.xs,
  },
  time: {
    fontSize: typography.size.xs,
    color: colors.muted,
  },
});

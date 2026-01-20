import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements'; // ✅ add
import { IconButton } from '../../components/ui/IconButton';
import { colors, spacing, typography } from '../../theme';
import { addMessage, getMessages, seedMockConversation, markSupportAsRead } from '../../db/messageRepo';
import Message from '../../db/Message';
import { useNavigation } from '@react-navigation/native';

export default function ChatScreen() {
  const navigation = useNavigation();
  const headerHeight = useHeaderHeight(); 
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const loadMessages = useCallback(async () => {
    await seedMockConversation();
    const data = await getMessages();
    setMessages(data);
  }, []);

  useEffect(() => {
    loadMessages();
    markSupportAsRead();
  }, [loadMessages]);

  const sendMessage = useCallback(async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setInput('');
    await addMessage(trimmed, 'me');
    await loadMessages();
  }, [input, loadMessages]);

  const items = useMemo(() => messages, [messages]);

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={headerHeight} 
    >
      <View style={styles.flex}>
        {/* Your custom header */}
        <View style={styles.header}>
          <IconButton name="chevron-left" size={28} onPress={() => navigation.goBack()} />
          <Text style={styles.title}>Chats</Text>
          <View style={styles.headerSpacer} />
        </View>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          keyboardShouldPersistTaps="handled" 
          renderItem={({ item }) => {
            const isMe = item.sender === 'me';
            return (
              <View style={[styles.bubble, isMe ? styles.bubbleMe : styles.bubbleSupport]}>
                <Text style={[styles.bubbleText, isMe ? styles.bubbleTextMe : styles.bubbleTextSupport]}>
                  {item.text}
                </Text>
              </View>
            );
          }}
        />

        <View style={styles.inputRow}>
          <TextInput
            value={input}
            onChangeText={setInput}
            placeholder="Type a message"
            placeholderTextColor={colors.muted}
            style={styles.input}
            returnKeyType="send"
            onSubmitEditing={sendMessage}
          />
          <Pressable style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendText}>Send</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
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
  list: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    gap: spacing.sm,
  },
  bubble: {
    maxWidth: '75%',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 16,
  },
  bubbleMe: {
    backgroundColor: colors.yellowSoft,
    alignSelf: 'flex-end',
  },
  bubbleSupport: {
    backgroundColor: colors.surfaceAlt,
    alignSelf: 'flex-start',
  },
  bubbleText: {
    fontSize: typography.size.sm,
  },
  bubbleTextMe: {
    color: colors.text,
  },
  bubbleTextSupport: {
    color: colors.text,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
  },
  input: {
    flex: 1,
    backgroundColor: colors.surfaceAlt,
    borderRadius: 20,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    fontSize: typography.size.sm,
    color: colors.text,
  },
  sendButton: {
    marginLeft: spacing.sm,
    backgroundColor: colors.yellow,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 18,
  },
  sendText: {
    fontSize: typography.size.sm,
    fontFamily: typography.fontFamily.medium,
    color: colors.text,
  },
});

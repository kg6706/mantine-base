import { replaceDynamicParams } from './helpers';

type QueryKeyDynamicParams = {
  POSTS: { userId: string };
  USER_POSTS: { userId: string };
  COMMENTS: { postId: string };
  USER_INFO: { userId: string };
  TOKEN_INFO: { userId: string };
  CHAT_MESSAGES: { conversationId: string };
  UNREADS: { userId: string };
  SERVICES: { userId: string };
  USER_TOKENS: { userId: string };
  TOKEN_TRANSACTIONS: { userId: string };
  WITHDRAWALS: { userId: string };
  WITHDRAWALS_INFO: { userId: string };
  CONVERSATION_MEMBERS: { conversationId: string };
  CONVERSATION_MEMBER: { conversationId: string };
  CONVERSATION: { conversationId: string };
  PR_ORDERS: { conversationId: string };
  CONNECTION_REQUESTS: { userId: string };
  CONNECTIONS: { userId: string };
  TRENDING: { userId: string };
  PRODUCTS: { userId: string };
  PRODUCT_DETAIL: { productId: string };
};

export const QUERY_KEYS = {
  USER_INFO: 'user:{userId}',
  POSTS: 'posts:{userId}',
  TRENDING: 'trending:{userId}',
  USER_POSTS: 'user:posts:{userId}',
  COMMENTS: 'comments:{postId}',
  TOKEN_INFO: 'tokens:{userId}',
  TOKEN_REQUESTS: 'token:requests',
  PERSONAL_CONVERSATIONS: 'personal:conversations',
  CHAT_MESSAGES: 'chat:{conversationId}',
  UNREADS: 'unreads:{userId}',
  SERVICES: 'services:{userId}',
  CURRENCY_LIST: 'currency:list',
  CATEGORY_LIST: 'category:list',
  USER_TOKENS: 'users:tokens:{userId}',
  TOKEN_TRANSACTIONS: 'users:transactions:{userId}',
  WITHDRAWALS: 'users:withdrawals:{userId}',
  WITHDRAWALS_INFO: 'withdrawal:info:{userId}',
  WITHDRAWALS_REQUESTS: 'withdrawal:requests',
  USERS_LIST: 'users:list',
  SERVICES_LIST: 'services:list',
  ALL_CONVERSATIONS: 'all:conversations',
  HASHTAGS: 'hashtags',
  CONVERSATION_MEMBERS: 'conversations:{conversationId}:members',
  CONVERSATION_MEMBER: 'conversations:{conversationId}:member',
  CONVERSATION: 'conversation:{conversationId}:info',
  PR_ORDERS: 'conversation:{conversationId}:orders',
  ORDERS: 'my:orders',
  RECEIVED_ORDERS: 'my:orders:received',
  CONNECTION_REQUESTS: 'connection:requests:{userId}',
  CONNECTIONS: 'connection:{userId}',
  PRODUCTS: 'products:{userId}',
  PRODUCT_DETAIL: 'product:{productId}',
  CART: 'cart:me',
  PRODUCT_LIST: 'products:list',
  ORDER_LIST: 'order:list',
} as const;

export const getQueryKey = <T extends keyof typeof QUERY_KEYS>(
  key: T,
  params?: T extends keyof QueryKeyDynamicParams ? QueryKeyDynamicParams[T] : never
): string => {
  const template: string = QUERY_KEYS[key];
  return replaceDynamicParams(template, params);
};

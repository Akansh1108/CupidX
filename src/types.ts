export interface User {
  id: string;
  name: string;
  age: number;
  bio: string;
  photos: string[];
  interests: string[];
  location?: {
    latitude: number;
    longitude: number;
    city: string;
  };
}

export interface Match {
  id: string;
  users: [User, User];
  createdAt: Date;
  messages: Message[];
  status: 'active' | 'blocked' | 'expired';
}

export interface Message {
  id: string;
  matchId: string;
  senderId: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'image' | 'gif';
  readBy: string[];
}

export interface SwipeAction {
  id: string;
  userId: string;
  targetUserId: string;
  action: 'like' | 'pass' | 'superlike';
  timestamp: Date;
}

export interface Preference {
  minAge: number;
  maxAge: number;
  maxDistance: number;
  interestedIn: 'men' | 'women' | 'both';
  showMe: boolean;
}

export interface ChatRoom {
  id: string;
  matchId: string;
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
}

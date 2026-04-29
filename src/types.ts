export type PageId = 'dashboard' | 'leads' | 'conversations' | 'analytics' | 'settings';

export interface Lead {
  id: string;
  name: string;
  role: string;
  status: 'new' | 'contacted' | 'qualified' | 'won' | 'lost';
  company: string;
  lastActivity: string;
  score: number;
  initials: string;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  time: string;
  type: string;
}

export interface Message {
  id: string;
  sender: 'user' | 'me' | 'ai';
  text: string;
  time: string;
}

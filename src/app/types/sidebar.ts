export interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export interface TrendingTopic {
  category: string;
  title: string;
  posts: string;
}

export interface SuggestedUser {
  name: string;
  username: string;
  verified: boolean;
  avatar: string;
}

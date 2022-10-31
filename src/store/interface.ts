export interface User {
  userName?: string;
  role?: string;
  avatar?: string;
  cccBalance?: number;
  email?: string;
  level?: number;
  walletAddress?: string;
  isPrivate?: boolean;
}

export interface SideBar {
  isTransactionsDropdownShowing: boolean;
  isGamesDropdownShowing: boolean;
}

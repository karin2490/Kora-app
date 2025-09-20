export interface Activity {
  id: string;
  title: string;
  completed: boolean;
  icon: string;
}

export interface ProgramSection {
  title: string;
  cardCount: number;
}

export interface DashboardData {
  todayActivities: Activity[];
  programSections: ProgramSection[];
}

export interface NavigationItem {
  id: string;
  title: string;
  completed: boolean;
  icon: string;
}

export interface NavigationIcon {
  id: string;
  icon: string;
  isAvatar?: boolean;
}
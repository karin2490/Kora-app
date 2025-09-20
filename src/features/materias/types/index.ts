 export interface Subject {
  id: string;
  name: string;
  icon: string;
  isActive?: boolean;
  description?: string;
}

export interface NavigationSubject {
  id: string;
  name: string;
  icon: string;
  isSelected?: boolean;
}

export interface MateriasProps {
  className?: string;
  subjects?: Subject[];
  onSubjectSelect?: (subjectId: string) => void;
}

export interface SubjectCardProps {
  subject: Subject;
  onClick?: (subjectId: string) => void;
  className?: string;
}

export interface NavigationSidebarProps {
  subjects?: NavigationSubject[];
  selectedSubject?: string;
  onSubjectChange?: (subjectId: string) => void;
  className?: string;
}
export interface Program {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  isActive?: boolean;
  order?: number;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  isSelected?: boolean;
}

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
  isActive?: boolean;
}

export interface ProgramasProps {
  className?: string;
  subjectId?: string;
  onProgramSelect?: (programId: string) => void;
}

export interface ProgramCardProps {
  program: Program;
  onClick?: (programId: string) => void;
  className?: string;
}

export interface HeaderSubjectProps {
  subjects?: Subject[];
  selectedSubject?: string;
  onSubjectChange?: (subjectId: string) => void;
  className?: string;
}

export interface HeaderProgramSectionProps {
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
  programs?: Program[];
  selectedProgram?: string | null;
  onProgramSelect?: (programId: string) => void;
  className?: string;
}
'use client';

import React from 'react';
import clsx from 'clsx';
import styles from './HeaderProgramSection.module.css';
import BreadcrumbSection from '../BreadcrumbSection/BreadcrumbSection';
import HeaderProgramTitle from '../HeaderProgramTitle/HeaderProgramTitle';
import SubjectContainer from '../SubjectContainer/SubjectContainer';
import type { BreadcrumbItem, Program } from '../../types';

interface HeaderProgramSectionProps {
  breadcrumbs?: BreadcrumbItem[];
  title?: string;
  programs?: Program[];
  selectedProgram?: string | null;
  onProgramSelect?: (programId: string) => void;
  className?: string;
}

const HeaderProgramSection: React.FC<HeaderProgramSectionProps> = ({
  breadcrumbs = [],
  title = "Sinfonía de la lectoescritura",
  programs = [],
  selectedProgram,
  onProgramSelect,
  className
}) => {
  return (
    <div className={clsx(styles.headerProgramSection, className)}>
      <div className={styles.headerArea}>
        <BreadcrumbSection breadcrumbs={breadcrumbs} />
        <HeaderProgramTitle title={title} />
      </div>
      <SubjectContainer
        programs={programs}
        selectedProgram={selectedProgram}
        onProgramSelect={onProgramSelect}
      />
    </div>
  );
};

export default HeaderProgramSection;
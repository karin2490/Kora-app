'use client';

import React from 'react';
import clsx from 'clsx';
import styles from './HeaderProgramTitle.module.css';

interface HeaderProgramTitleProps {
  title?: string;
  icon?: string;
  className?: string;
}

const HeaderProgramTitle: React.FC<HeaderProgramTitleProps> = ({
  title = "Sinfonía de la lectoescritura",
  icon = "📚",
  className
}) => {
  return (
    <div className={clsx(styles.headerProgramTitle, className)}>
      <div className={styles.titleContainer}>
        <div className={styles.titleIcon} aria-hidden="true">
          {icon}
        </div>
        <h1 className={styles.mainTitle}>{title}</h1>
      </div>
    </div>
  );
};

export default HeaderProgramTitle;
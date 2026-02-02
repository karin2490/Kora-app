 
'use client';

import React from 'react';
import clsx from 'clsx';

import styles from './MainHeader.module.css';

interface MainHeaderProps {
  className?: string;
  title?: string;
  icon?: string;
}

const MainHeader: React.FC<MainHeaderProps> = ({
  className,
  title = "Materias",
  icon = "📚"
}) => {
  return (
    <header className={clsx(styles.mainHeader, className)}>
      <div className={styles.headerContent}>
        <div className={styles.titleSection}>
          <div className={styles.headerIcon} aria-hidden="true">
            {icon}
          </div>
          <h1 className={styles.pageTitle}>{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
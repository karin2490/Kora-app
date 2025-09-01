import React from 'react';
import styles from './AppHeader.module.css';

interface AppHeaderProps {
  title?: string;
  className?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ 
  title = "Kora", 
  className = "" 
}) => {
  return (
    <header className={`${styles.header} ${className}`}>
      <div className={styles.container}>
        <div className={styles.logoBox}>
          <h1 className={styles.title}>
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
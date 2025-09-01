import React from 'react';
import clsx from 'clsx';
import styles from './FormCard.module.css';

interface FormCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
}

const FormCard: React.FC<FormCardProps> = ({ 
  children, 
  title, 
  className = "",
  maxWidth = 'md'
}) => {
  return (
    <div className={clsx(styles.cardContainer, styles[maxWidth], className)}>
      <div className={styles.card}>
        {title && (
          <h2 className={styles.title}>
            {title}
          </h2>
        )}
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormCard;
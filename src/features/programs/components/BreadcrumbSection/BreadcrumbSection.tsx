'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import styles from './BreadcrumbSection.module.css';
import type { BreadcrumbItem } from '../../types';

interface BreadcrumbSectionProps {
  breadcrumbs?: BreadcrumbItem[];
  className?: string;
}

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  breadcrumbs = [],
  className
}) => {
  const router = useRouter();

  if (breadcrumbs.length === 0) return null;

  const handleClick = (item: BreadcrumbItem) => {
    if (item.href && !item.isActive) {
      router.push(item.href);
    }
  };

  return (
    <nav className={clsx(styles.breadcrumbSection, className)} aria-label="Breadcrumb">
      <div className={styles.breadcrumbContainer}>
        <span className={styles.breadcrumbIcon}>📚</span>
        <ol className={styles.breadcrumbList}>
          {breadcrumbs.map((item, index) => (
            <li key={item.id} className={styles.breadcrumbItem}>
              {index > 0 && (
                <span className={styles.separator} aria-hidden="true">
                  &gt;
                </span>
              )}
              {item.href ? (
                <span
                  onClick={() => handleClick(item)}
                  className={clsx(
                    styles.breadcrumbLink,
                    { [styles.active]: item.isActive }
                  )}
                  style={{ cursor: item.isActive ? 'default' : 'pointer' }}
                >
                  {item.label}
                </span>
              ) : (
                <span
                  className={clsx(
                    styles.breadcrumbText,
                    { [styles.active]: item.isActive }
                  )}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbSection;
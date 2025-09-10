'use client';

import { useState } from 'react';
import styles from './ProgramCard.module.css';

export default function ProgramCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${styles.programCard} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.iconContainer}>
        <span className={styles.icon}>📚</span>
      </div>
      <span className={styles.text}>Programa</span>
    </div>
  );
}
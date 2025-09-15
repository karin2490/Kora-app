 
'use client';

import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import styles from './ProgramCard.module.css';

interface ProgramCardProps {
  className?: string;
  icon?: string;
  text?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ 
  className,
  icon = "📚",
  text = "Programa",
  onClick,
  disabled = false
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseEnter = useCallback(() => {
    if (!disabled) {
      setIsHovered(true);
    }
  }, [disabled]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setIsPressed(false);
  }, []);

  const handleMouseDown = useCallback(() => {
    if (!disabled) {
      setIsPressed(true);
    }
  }, [disabled]);

  const handleMouseUp = useCallback(() => {
    setIsPressed(false);
  }, []);

  const handleClick = useCallback(() => {
    if (!disabled && onClick) {
      onClick();
    }
  }, [disabled, onClick]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled) {
      event.preventDefault();
      onClick?.();
    }
  }, [disabled, onClick]);

  return (
    <div
      className={clsx(
        styles.programCard,
        {
          [styles.hovered]: isHovered,
          [styles.pressed]: isPressed,
          [styles.disabled]: disabled,
        },
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-label={text}
    >
      <div className={styles.cardIcon} aria-hidden="true">
        {icon}
      </div>
      <span className={styles.cardText}>{text}</span>
    </div>
  );
};

export default ProgramCard;
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './ActionLink.module.css';

interface ActionLinkProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'forgotPassword' | 'help';
}

const ActionLink: React.FC<ActionLinkProps> = ({
  href,
  onClick,
  children,
  className = "",
  variant = 'default'
}) => {
  const linkClasses = clsx(
    styles.actionLink,
    styles[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={linkClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={linkClasses}
    >
      {children}
    </button>
  );
};

export default ActionLink;
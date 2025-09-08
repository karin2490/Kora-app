import React from 'react';
import clsx from 'clsx';
import styles from './RoleSelector.module.css';

type UserRole = 'student' | 'teacher';

interface RoleSelectorProps {
  selectedRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  className?: string;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ 
  selectedRole, 
  onRoleChange, 
  className = "" 
}) => {
  const roles = [
    { id: 'student', label: 'Alumno', icon: '🎓' },
    { id: 'teacher', label: 'Maestro', icon: '👨‍🏫' }
  ];

  return (
    <div className={clsx(styles.selectorContainer, className)}>
      {roles.map((role) => (
        <button
          key={role.id}
          type="button"
          onClick={() => onRoleChange(role.id as UserRole)}
          className={clsx(
            styles.roleButton,
            selectedRole === role.id ? styles.selected : styles.unselected
          )}
        >
          <span className={styles.roleIcon}>{role.icon}</span>
          <span className={styles.roleLabel}>{role.label}</span>
        </button>
      ))}
    </div>
  );
};

export default RoleSelector;
import React from 'react';
import clsx from 'clsx';
import styles from './InputField.module.css';

interface InputFieldProps {
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  icon?: string;
  label?: string;
  className?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  label,
  className = "",
  required = false
}) => {
  return (
    <div className={clsx(styles.fieldContainer, className)}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <div className={styles.inputBox}>
          <div className={styles.inputContainer}>
            {icon && (
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{icon}</span>
              </div>
            )}
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              required={required}
              className={styles.input}
            />
          </div>
          {type === 'password' && (
            <div className={styles.passwordIndicators}>
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={clsx(
                    styles.passwordDot,
                    i < value.length ? styles.filled : styles.empty
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputField;
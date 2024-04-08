"use client";

import React, { ButtonHTMLAttributes } from 'react';
import clsx from "clsx";
import styles from './button.css';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * primary or secondary
   */
  variant?: 'primary' | 'secondary';
  textContent: string;
}

/**
 * button 컴포넌트
 */
export const Button = ({
  variant = 'primary',
  textContent,
  className,
  children,
  ...props
}: IProps) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], className)}
      {...props}>
      {textContent}
    </button>
  );
};



"use client";

import React, { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textContent?: string;

}
/**
 * button 컴포넌트
 */
export const Button = ({
  textContent,
  className,
  children,
  ...props
}: IProps) => {
  return (
    <button {...props}>
      {textContent}
    </button>
  );
};



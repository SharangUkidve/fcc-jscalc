import React, { ButtonHTMLAttributes, memo, PropsWithChildren } from 'react';

const Button = ({
  label,
  className,
  id,
  value,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & { label: string | number }) => (
  <button className={`calc-button${className ? ` ${className}` : ''} ${id}`} id={id} value={label} {...props}>
    {label}
  </button>
);

export default memo(Button);

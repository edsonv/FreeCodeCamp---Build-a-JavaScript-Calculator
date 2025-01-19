import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: number | string;
};
export const Key = ({ label, ...props }: Props) => {
  const formattedLabel = typeof label === 'number' ? label.toString() : label;

  return <button {...props}>{formattedLabel}</button>;
};

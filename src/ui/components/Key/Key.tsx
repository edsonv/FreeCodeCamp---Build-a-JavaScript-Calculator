import { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: number | string;
};
export const Key = ({ label, ...props }: Props) => {
  return (
    <button {...props}>
      {label}
    </button>
  );
};





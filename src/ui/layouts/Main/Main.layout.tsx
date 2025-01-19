import { ReactNode } from 'react';
import styles from './Main.module.scss'

type Props = {
  children: ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return <div className={styles.mainLayout}>{children}</div>;
};

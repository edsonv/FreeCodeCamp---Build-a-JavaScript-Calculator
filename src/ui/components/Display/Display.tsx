import styles from './Display.module.scss'
type Props = {
  display: string;
};

export const Display = ({ display }: Props) => {
  return <div id='display' className={styles.display}>{display}</div>;
};

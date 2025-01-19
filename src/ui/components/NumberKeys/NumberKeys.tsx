import { numberToNameString } from '../../utils/numberToNameString';
import { Key } from '../Key/Key';
import styles from './NumberKeys.module.scss'

type Props = {
  callback: (number: number) => void;
};

export const NumberKeys = ({ callback }: Props) => {
  return (
    <div className={styles.numbersWrapper}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
        <Key
          label={number}
          id={numberToNameString(number)}
          onClick={() => callback(number)}
        />
      ))}
    </div>
  );
};

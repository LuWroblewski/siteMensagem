import React from 'react';
import styles from './styles.module.css';

interface Props {
  text?: React.ReactNode;
  onClick: () => void;
}

export const ButtonForm: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button className={styles.buttonLogin} onClick={onClick}>
      {text}
    </button>
  );
};

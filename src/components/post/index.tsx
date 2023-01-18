import styles from './styles.module.css';

type Props = {
  placeholder: string;
  value?: string | number;
  onChange: (str: string) => void;
  text?: React.ReactNode;
  maxLength: number;
};

export const Post = ({ onChange, placeholder, value, text, maxLength }: Props) => (
  <div className={styles.divPost}>
    <p className={styles.textPost}> {text}</p>
    <textarea
      className={styles.postPeople}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      maxLength={maxLength}
    ></textarea>
  </div>
);

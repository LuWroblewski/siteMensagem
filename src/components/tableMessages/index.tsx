import styles from './styles.module.css';

type Post = {
  name: string;
  message: string;
};

type Props = {
  messages: Post[];
};

export const TableMessages = ({ messages }: Props) => {
  return (
    <table className={styles.tablePeople}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Mensagem</th>
        </tr>
      </thead>
      <tbody>
        {messages.map((post, index: number) => (
          <tr key={index}>
            <td>{post.name}</td>
            <td>{post.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

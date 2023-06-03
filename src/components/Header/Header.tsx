import styles from "./Header.module.css";
interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => {
  return (
    <div className={styles.header}>
      <h1> to do list {todoCount} tasks</h1>
    </div>
  );
};

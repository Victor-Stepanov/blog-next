import { Header } from "./Header";
import styles from "./layout.module.css";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

import { Button } from "../button/component";
import styles from "./styles.module.scss";

export const Tab = ({ title, onClick, isActive, className }) => {
  return (
    <span className={className}>
      <Button onClick={onClick} disabled={isActive} className={styles.action}>
        {title}
        {isActive && " - Active"}
      </Button>
    </span>
  );
};

import { Button } from "../button/component";
import styles from "./styles.module.scss";
import classNames from "classnames";

export const Tab = ({ title, onClick, isActive }) => {
  return (
    <span className={classNames(styles.root)}>
      <Button onClick={onClick} disabled={isActive}>
        {title}
        {isActive && " - Active"}
      </Button>
    </span>
  );
};

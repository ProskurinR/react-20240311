import styles from "./styles.module.scss";
import classNames from "classnames";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { UserContext } from "../../contexts/user";

export const Button = ({ children, onClick, disabled }) => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.root, {
        [styles.disabled]: disabled,
        [styles.dark]: theme === "dark",
        [styles.invisible]: user.length === 0,
      })}
    >
      {children}
    </button>
  );
};

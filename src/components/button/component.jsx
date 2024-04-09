import styles from "./styles.module.scss";
import classNames from "classnames";
import { useCurrentTheme } from "../../contexts/theme";

export const Button = ({
  children,
  onClick,
  disabled,
  className,
  size = "l",
}) => {
  const theme = useCurrentTheme();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classNames(styles.root, className, styles[size], {
        [styles.disabled]: disabled,
        [styles.dark]: theme.theme === "dark",
      })}
    >
      {children}
    </button>
  );
};

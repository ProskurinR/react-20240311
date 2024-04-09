import styles from "./styles.module.scss";
import classNames from "classnames";
import { Theme } from "../theme/theme";
import { Autorization } from "../autorization/autirisation";

export const Header = () => {
  return (
    <header className={classNames(styles.root)}>
      <Theme />
      <Autorization />
    </header>
  );
};

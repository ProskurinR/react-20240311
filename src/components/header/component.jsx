import styles from "./styles.module.scss";
import classNames from "classnames";
//import { Theme } from "../theme/theme";
import { Autorization } from "../autorization/autirisation";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className={classNames(styles.root)}>
      {/* <Theme /> */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          classNames(styles.tab, { [styles.active]: isActive })
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/restaurants"
        className={({ isActive }) =>
          classNames(styles.tab, { [styles.active]: isActive })
        }
      >
        Restaurants
      </NavLink>

      <Autorization />
    </header>
  );
};

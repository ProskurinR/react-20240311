import styles from "./styles.module.scss";
import { useCurrentUser } from "../../contexts/user";
import { SIZES } from "../../constants/sizes";
import { Button } from "../button/component";

export const Autorization = ({ className }) => {
  const { user, login, logout } = useCurrentUser();
  const isAuthorized = !!user;

  return (
    <span className={className}>
      <span className={styles.action}>
        {!!user && <span>{user}</span>}
        <Button
          onClick={() => (isAuthorized ? logout() : login("Roman"))}
          size={SIZES.m}
        >
          {isAuthorized ? "logout" : "login"}
        </Button>
      </span>
    </span>
  );
};

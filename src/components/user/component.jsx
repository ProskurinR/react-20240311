import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/user/selectors";

export const User = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId));
  return <div>{user.name}</div>;
};

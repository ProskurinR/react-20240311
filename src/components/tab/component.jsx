import { useSelector } from "react-redux";
import { Button } from "../button/component";
import styles from "./styles.module.scss";

export const Tab = ({ restaurantId, onClick, isActive, className }) => {
  const restaurant = useSelector(
    (state) => state.restaurant.entities[restaurantId]
  );

  if (!restaurant) {
    return null;
  }

  return (
    <span className={className}>
      <Button onClick={onClick} disabled={isActive} className={styles.action}>
        {restaurant?.name}
        {/* {isActive && " - Active"} */}
      </Button>
    </span>
  );
};

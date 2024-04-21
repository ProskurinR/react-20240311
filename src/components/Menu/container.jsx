import { Menu } from "./component";
import { useGetDishesQuery } from "../../redux/service/api";
import { useParams } from "react-router-dom";

export const MenuContainer = () => {
  const { restaurantId } = useParams();

  const { data: dishes, isFetching } = useGetDishesQuery(restaurantId);

  if (!dishes?.length) {
    return null;
  }

  if (isFetching) {
    return <div>Loading</div>;
  }

  return <Menu dishes={dishes} />;
};

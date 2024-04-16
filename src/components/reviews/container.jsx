import { useSelector } from "react-redux";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors";
import { Reviews } from "./component";
import { useRequest } from "../../hooks/use-request";
import { REQUEST_STATUSES } from "../../redux/ui/request/constants";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewRequestStatus = useRequest(
    getReviewsByRestaurantId,
    restaurantId
  );

  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  if (!reviewIds?.length) {
    return null;
  }

  if (reviewRequestStatus === REQUEST_STATUSES.pending) {
    return <div>Loading</div>;
  }

  return <Reviews reviewIds={reviewIds} />;
};

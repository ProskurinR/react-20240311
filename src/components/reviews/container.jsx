import { useSelector } from "react-redux";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors";
import { Reviews } from "./component";
import { useRequest } from "../../hooks/use-request";
import { REQUEST_STATUSES } from "../../redux/ui/request/constants";
import { useGetReviewsQuery } from "../../redux/service/api";
import { useParams } from "react-router-dom";

//export const ReviewsContainer = ({ restaurantId }) => {
export const ReviewsContainer = () => {
  const { restaurantId } = useParams();

  // const reviewRequestStatus = useRequest(
  //   getReviewsByRestaurantId,
  //   restaurantId
  // );

  // const reviewIds = useSelector((state) =>
  //   selectRestaurantReviewIds(state, restaurantId)
  // );

  const { data: reviews, isFetching } = useGetReviewsQuery(restaurantId);

  if (!reviews?.length) {
    return null;
  }

  if (isFetching) {
    return <div>Loading</div>;
  }

  // if (reviewRequestStatus === REQUEST_STATUSES.pending) {
  //   return <div>Loading</div>;
  // }

  return <Reviews reviews={reviews} />;
};

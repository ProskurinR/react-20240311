/* eslint-disable react/jsx-key */
import { Review } from "../review/component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/get-reviews-by-restaurant-id";

export const Reviews = ({ restaurantId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewsByRestaurantId(restaurantId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restaurantId]);

  const reviewIds = useSelector((state) =>
    selectRestaurantReviewIds(state, restaurantId)
  );

  if (!reviewIds?.length) {
    return null;
  }

  return (
    <ul>
      {reviewIds.map((reviewId) => (
        <li>
          <Review reviewId={reviewId} />
        </li>
      ))}
    </ul>
  );
};

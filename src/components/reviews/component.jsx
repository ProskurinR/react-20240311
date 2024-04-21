/* eslint-disable react/jsx-key */
import { useParams } from "react-router-dom";
import { NewReviewForm } from "../new-review-form/component";
import { ReviewContainer } from "../review/container";

export const Reviews = ({ reviews }) => {
  const { restaurantId } = useParams();
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li>
            <ReviewContainer review={review} />
          </li>
        ))}
      </ul>
      <NewReviewForm restaurantId={restaurantId} />
    </div>
  );
};

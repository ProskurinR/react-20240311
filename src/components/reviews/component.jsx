/* eslint-disable react/jsx-key */
import { ReviewContainer } from "../review/container";

export const Reviews = ({ reviewIds }) => {
  return (
    <ul>
      {reviewIds.map((reviewId) => (
        <li>
          <ReviewContainer reviewId={reviewId} />
        </li>
      ))}
    </ul>
  );
};

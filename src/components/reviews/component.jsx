/* eslint-disable react/jsx-key */
import { Review } from "../review/component";

export const Reviews = ({ reviewIds }) => {
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

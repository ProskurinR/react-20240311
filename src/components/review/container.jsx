import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/review/selectors";
import { Review } from "./component";

export const ReviewContainer = ({ review }) => {
  // const review = useSelector((state) => selectReviewById(state, reviewId));

  // if (!review) {
  //   return null;
  // }

  return <Review review={review} />;
};

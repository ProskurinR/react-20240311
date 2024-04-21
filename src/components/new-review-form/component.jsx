import classNames from "classnames";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Button } from "../button/component";
import { useCreateReviewMutation } from "../../redux/service/api";
import { SIZES } from "../../constants/sizes";

export const NewReviewForm = ({ restaurantId }) => {
  const [text, setText] = useState("");

  const [createReview, { isLoading }] = useCreateReviewMutation();

  if (isLoading) {
    return <div>Saving...</div>;
  }
  return (
    <div className={classNames(styles.root)}>
      <span className={classNames(styles.tab)}>
        <input
          value={text}
          className={classNames(styles.input)}
          onChange={(event) => setText(event.target.value)}
        />
      </span>
      <Button
        onClick={() => {
          setText("");
          text.length > 0 &&
            createReview({
              restaurantId,
              newReview: {
                userId: "a304959a-76c0-4b34-954a-b38dbf310360",
                text,
                rating: 5,
              },
            });
        }}
        size={SIZES.m}
      >
        CreateReview
      </Button>
    </div>
  );
};

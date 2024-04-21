import styles from "./styles.module.scss";
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import { ReviewsTab } from "../reviews-tab/component";
import { MenuTab } from "../menu-tab/component";
import { useEffect } from "react";

export const Restaurant = ({ restaurant }) => {
  const navigate = useNavigate();

  const { id, name } = restaurant;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `/restaurants/${id}`)
      navigate(`/restaurants/${id}/menu`);
  });

  return (
    <div className={classNames(styles.root)}>
      <h2>{name ? name : "noname"}</h2>
      <MenuTab />
      <ReviewsTab />
    </div>
  );
};

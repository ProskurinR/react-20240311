import { useNavigate } from "react-router-dom";
import { SelectedDish } from "../components/selected-dish/component";
import { SIZES } from "../constants/sizes";
import { Button } from "../components/button/component";

export const DishPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Button onClick={() => navigate(-1)} size={SIZES.m}>
        back
      </Button>
      <h2>Selected dish</h2>
      <SelectedDish />
    </div>
  );
};

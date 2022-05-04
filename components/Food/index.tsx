import { FC, useState } from "react";
import { toast } from 'react-toastify';

import { NumberInput } from "components/NumberInput";
import { FoodItem } from "models/foods";

import styles from "./styles.module.css";

type FoodProps = {
  food: FoodItem;
  addToDailyKcal: (kcal: number) => void;
};

export const Food: FC<FoodProps> = ({ food, addToDailyKcal }) => {
  const [portionMultiplier, setPortionMultiplier] = useState(1);
  const kcal =
    food.foodNutrients.find((item) => item.nutrientName === "Energy")?.value ??
    0;
  const kcalWithPortionM = kcal * portionMultiplier;

  return (
    <div className={`${styles["food-item"]}`}>
      <div
        className={`${styles["description"]}`}
        onClick={() => {
          addToDailyKcal(kcalWithPortionM);
          toast.success(`Added ${food.description} to your daily calorie intake`);
        }}
      >
        <p>
          <strong>{food.brandName}</strong>
        </p>
        <p>{food.brandOwner}</p>
        <p>{food.description}</p>
        <p className={`${styles["kcal-indicator"]}`}>{kcalWithPortionM} kcal</p>
      </div>
      <div className={`${styles["portion-multiplier"]}`}>
        <NumberInput
          {...{
            label: "Portion Multiplier",
            allowNegativeValues: false,
            valueChange: (d) => setPortionMultiplier(d),
          }}
        />
      </div>
    </div>
  );
};

import { FC, useState } from "react";

import { FoodItem } from "models/foods";

import styles from "./styles.module.css";

type FootItemProps = {
  food: FoodItem;
  addToDailyKcal: (kcal: number) => void;
};

export const Food: FC<FootItemProps> = ({ food, addToDailyKcal }) => {
  const [portionMultiplier, setPortionMultiplier] = useState(1);
  const kcal =
    food.foodNutrients.find((item) => item.nutrientName === "Energy")?.value ??
    0;

  return (
    <div className={`${styles["food-item"]}`}>
      <div
        className={`${styles["description"]}`}
        onClick={() => addToDailyKcal((kcal ?? 0) * portionMultiplier)}
      >
        <p><strong>{food.brandName}</strong></p>
        <p>{food.brandOwner}</p>
        <p>{food.description}</p>
        <p className={`${styles['kcal-indicator']}`}>{kcal} kcal</p>
      </div>
      <div className={`${styles["portion-multiplier"]}`}>
        <label htmlFor="portion-multiplier">Portion Multiplier</label>
        {/* TODO: make custom input! */}
        <input
          id="portion-multiplier"
          type="number"
          placeholder="Portion Multiplier"
          step={0.25}
          defaultValue={portionMultiplier}
          onChange={(evt) => setPortionMultiplier(+evt.target.value)}
        />
      </div>
    </div>
  );
};

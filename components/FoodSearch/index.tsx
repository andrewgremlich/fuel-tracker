import { FC, MouseEventHandler, FormEventHandler } from "react";

import styles from "./styles.module.css";

type FoodSearchProps = {
  getSearchResults: FormEventHandler<HTMLFormElement>;
  setFoodQuery: (query: string) => void;
};

export const FoodSearch: FC<FoodSearchProps> = ({
  setFoodQuery,
  getSearchResults,
}) => (
  <form onSubmit={getSearchResults} className={styles["search-bar"]}>
    <input
      className={styles["search-input"]}
      type="search"
      placeholder="Search Foods"
      onChange={(evt) => setFoodQuery(evt.target.value)}
    />
    <input className={styles["search-submit"]} type="submit" value="Search!" />
  </form>
);

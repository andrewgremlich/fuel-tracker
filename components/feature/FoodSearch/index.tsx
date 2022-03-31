import { FC } from "react";

import { SearchResults } from "components/SearchResults";

import styles from "./styles.module.css";

export const FoodSearch: FC = () => {
  console.log(process.env.USDA_API_KEY)

  return (
    <div>
      <div className={styles["search-bar"]}>
        <input
          className={styles["search-input"]}
          type="search"
          placeholder="Search Foods"
        />
        <input
          className={styles["search-submit"]}
          type="submit"
          value="Search!"
        />
      </div>
      <SearchResults />
    </div>
  );
};

import { FC, FormEventHandler, useState } from "react";

import { QueryParams } from "models/foods";

import styles from "./styles.module.css";

type FoodSearchProps = {
  getSearchResults: (queryParams: QueryParams) => void;
};

export const FoodSearch: FC<FoodSearchProps> = ({ getSearchResults }) => {
  const [foodQuery, setFoodQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    getSearchResults({ foodQuery, pageNumber, pageSize });
  };

  return (
    <form onSubmit={handleSubmit} className={styles["search-bar"]}>
      <input
        className={styles["search-input"]}
        type="search"
        placeholder="Search Foods"
        onChange={(evt) => setFoodQuery(evt.target.value)}
      />
      <input
        onChange={(evt) => setPageSize(+evt.target.value)}
        defaultValue={pageSize}
        className={`${styles["number-input"]} ${styles["page-size"]}`}
        type="number"
        step={5}
        placeholder="Page Size"
      />
      <input
        onChange={(evt) => setPageNumber(+evt.target.value)}
        defaultValue={pageNumber}
        className={`${styles["number-input"]} ${styles["page-number"]}`}
        type="number"
        placeholder="Page Number"
      />
      <input
        className={styles["search-submit"]}
        type="submit"
        value="Search!"
      />
    </form>
  );
};

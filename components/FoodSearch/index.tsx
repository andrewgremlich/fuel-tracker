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
      <div className={styles["search-input"]}>
        <label
          htmlFor="food-query-input"
          className={`${styles["input-label"]}`}
        >
          Food
        </label>
        <input
          id="food-query-input"
          type="search"
          placeholder="Search Foods"
          onChange={(evt) => setFoodQuery(evt.target.value)}
        />
      </div>
      <div id="page-size" className={`${styles["page-size"]}`}>
        <label htmlFor="page-size-input" className={`${styles["input-label"]}`}>
          Page Size
        </label>
        <input
          id="page-size-input"
          onChange={(evt) => setPageSize(+evt.target.value)}
          defaultValue={pageSize}
          className={`number-input`}
          type="number"
          step={5}
          placeholder="Page Size"
        />
      </div>
      <div id="page-number" className={`${styles["page-number"]}`}>
        <label htmlFor="page-number" className={`${styles["input-label"]}`}>
          Page Number
        </label>
        <input
          id="page-number-input"
          onChange={(evt) => setPageNumber(+evt.target.value)}
          defaultValue={pageNumber}
          className={`number-input`}
          type="number"
          placeholder="Page Number"
        />
      </div>
      <input
        className={styles["search-submit"]}
        type="submit"
        value="Search!"
      />
    </form>
  );
};

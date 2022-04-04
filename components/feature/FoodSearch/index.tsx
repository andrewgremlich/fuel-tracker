import { FC, useRef, useState } from "react";

import { SearchResults } from "components/SearchResults";

import styles from "./styles.module.css";

export const FoodSearch: FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [foodQuery, setFoodQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const getSearchResults = () => {
    const queryParams = new URLSearchParams({
      foodQuery,
      pageSize,
      pageNumber,
    } as unknown as URLSearchParams);

    fetch(`/api/foods/search?${queryParams}`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResults(res.foods)
      });
  };

  return (
    <div>
      <div className={styles["search-bar"]}>
        <input
          className={styles["search-input"]}
          type="search"
          placeholder="Search Foods"
          onChange={(e) => setFoodQuery(e.target.value)}
        />
        <input
          onClick={getSearchResults}
          className={styles["search-submit"]}
          type="submit"
          value="Search!"
        />
      </div>
      <SearchResults />
    </div>
  );
};

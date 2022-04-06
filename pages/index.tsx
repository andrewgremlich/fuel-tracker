import { useState, FormEventHandler } from "react";
import type { GetServerSideProps, NextPage } from "next";

import { FoodSearch } from "components/FoodSearch";
import { SearchResults } from "components/SearchResults";
import { FoodItem } from "models/foods";

const Home: NextPage = () => {
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
  const [foodQuery, setFoodQuery] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [pageNumber, setPageNumber] = useState(1);

  const getSearchResults: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();

    const queryParams = new URLSearchParams({
      foodQuery,
      pageSize,
      pageNumber,
    } as unknown as URLSearchParams);

    fetch(`/api/foods/search?${queryParams}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setSearchResults(res.foods);
      });
  };

  return (
    <div>
      {/* Day Carousel with total for day */}
      {/* Estimation of needed calories per day */}
      <FoodSearch {...{ getSearchResults, setFoodQuery }} />
      <SearchResults {...{ searchResults }} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default Home;

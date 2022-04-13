import { useState, FormEventHandler } from "react";
import type { GetServerSideProps, NextPage } from "next";

import { FoodSearch } from "components/FoodSearch";
import { SearchResults } from "components/SearchResults";
import { FoodItem, QueryParams } from "models/foods";

const Home: NextPage = () => {
  const [totalKcal, setTotalKcal] = useState(0);
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);

  const getSearchResults = ({ foodQuery, pageNumber, pageSize }: QueryParams) => {
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
      <FoodSearch {...{ getSearchResults }} />
      <SearchResults
        {...{
          searchResults,
          addToKcal: (kcal) => setTotalKcal(totalKcal + kcal),
        }}
      />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default Home;

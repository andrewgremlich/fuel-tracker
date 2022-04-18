import { useState } from "react";
import type { GetServerSideProps, NextPage } from "next";

import { FoodSearch } from "components/FoodSearch";
import { SearchResults } from "components/SearchResults";
import { Food } from "components/Food";
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
      .then((res) => setSearchResults(res.foods));
  };

  console.log(totalKcal)

  return (
    <div>
      {/* Day Carousel with total for day */}
      {/* Estimation of needed calories per day */}
      <FoodSearch {...{ getSearchResults }} />
      <SearchResults>
        {
          searchResults.map((food) => (
            <Food
              key={food.fdcId}
              {...{
                food,
                addToDailyKcal: (kcal) => (console.log(kcal), setTotalKcal(totalKcal + kcal)),
              }}
            />
          ))
        }
      </SearchResults>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default Home;

import { useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FoodSearch } from "components/FoodSearch";
import { SearchResults } from "components/SearchResults";
import { Food } from "components/Food";
import { BMRForm } from "components/BMRForm";
import { DayTotalsCarousel } from "components/DayTotalsCarousel";
import { FoodItem, QueryParams } from "models/foods";

const Home: NextPage = () => {
  const [totalKcal, setTotalKcal] = useState<number>(0);
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);

  const getSearchResults = ({
    foodQuery,
    pageNumber,
    pageSize,
  }: QueryParams) => {
    const queryParams = new URLSearchParams({
      foodQuery,
      pageSize,
      pageNumber,
    } as unknown as URLSearchParams);

    fetch(`/api/foods/search?${queryParams}`)
      .then((res) => res.json())
      .then((res) => setSearchResults(res.foods));
  };

  return (
    <div>
      <DayTotalsCarousel />
      <BMRForm />
      <FoodSearch {...{ getSearchResults }} />
      <SearchResults>
        {searchResults.map((food) => (
          <Food
            key={food.fdcId}
            {...{
              food,
              addToDailyKcal: (kcal) => (
                console.log(kcal), setTotalKcal(totalKcal + kcal)
              ),
            }}
          />
        ))}
      </SearchResults>
      <ToastContainer position="bottom-center" />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default Home;

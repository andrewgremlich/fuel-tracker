import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

import { FoodSearch } from "components/FoodSearch";

const Home: NextPage = () => (
  <div>
    {/* Day Carousel with total for day */}
    {/* Estimation of needed calories per day */}
    <FoodSearch />
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default Home;

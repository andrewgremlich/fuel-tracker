import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { H1 } from "components/Text";

const Home: NextPage = () => (
  <div>
    <H1>Hello world</H1>
    {/* Search and add */}
    {/* Day Carousel with total for day */}
  </div>
);

export const getServerSideProps: GetServerSideProps = async () => {
  console.log(process.env.USDA_API_KEY);
  return { props: {} };
};

export default Home;

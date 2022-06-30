import type { NextPage } from "next";
import { useState } from "react";
import NumBaseball from "../components/NumBaseball";

const Home: NextPage = () => {
  const [nums, setNums] = useState([-1, -1, -1]);

  return <NumBaseball nums={nums} setNums={setNums} />;
};

export default Home;

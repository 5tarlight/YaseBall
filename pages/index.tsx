import type { NextPage } from "next";
import { useState } from "react";
import NumBaseball from "../components/NumBaseball";

const Home: NextPage = () => {
  const [nums, setNums] = useState([-1, -1, -1]);
  const [uInput, setUserInput] = useState([0, 0, 0]);

  return (
    <NumBaseball
      nums={nums}
      setNums={setNums}
      uInput={uInput}
      setUserInput={setUserInput}
    />
  );
};

export default Home;

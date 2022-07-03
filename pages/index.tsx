import type { NextPage } from "next";
import { useState } from "react";
import NumBaseball from "../components/NumBaseball";

const Home: NextPage = () => {
  const [nums, setNums] = useState([-1, -1, -1]);
  const [uInput, setUserInput] = useState([0, 0, 0]);

  const handleChange = (i: number, v: number) => {
    const input = [...uInput];
    input[i] = Math.min(9, Math.max(1, v)) || 1;
    setUserInput(input);
  };

  return (
    <NumBaseball
      nums={nums}
      setNums={setNums}
      uInput={uInput}
      handleChange={handleChange}
    />
  );
};

export default Home;

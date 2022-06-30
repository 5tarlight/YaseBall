import { NextPage } from "next";

interface Props {
  nums: number[];
  setNums: (nums: number[]) => void;
}

const NumBaseball: NextPage<Props> = ({ nums, setNums: changeNum }) => {
  return (
    <>
      {nums.map((n, i) => (
        <div key={i}>{n}</div>
      ))}
    </>
  );
};

export default NumBaseball;

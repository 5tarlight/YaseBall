import { NextPage } from "next";
import Image from "next/image";
import grass from "../public/static/images/grass.png";

interface Props {
  nums: number[];
  setNums: (nums: number[]) => void;
}

const NumBaseball: NextPage<Props> = ({ nums, setNums }) => {
  return (
    <div>
      <div className="background" />

      {nums.map((n, i) => (
        <div key={i}>{n}</div>
      ))}
      <style jsx>{`
        .background {
          background-image: url("https://cdn.discordapp.com/attachments/925363539873525780/992398469044117604/grass.png");
          width: 100vw;
          height: 100vh;
          position: absolute;
          z-index: -1000;
        }
      `}</style>
    </div>
  );
};

export default NumBaseball;

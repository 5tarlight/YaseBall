import { NextPage } from "next";
import PcCard from "./PcCard";

interface Props {
  nums: number[];
  setNums: (nums: number[]) => void;
}

const NumBaseball: NextPage<Props> = ({ nums, setNums }) => {
  return (
    <div>
      <div className="background" />

      <div className="container">
        <div className="result">
          <div className="result-item">Strike : {1}</div>
          <div className="result-item">Ball : {0}</div>
          <div className="result-item">Out : {2}</div>
        </div>

        <div className="pc-nums">
          <PcCard number={1} />
          <PcCard number={1} />
          <PcCard number={1} />
        </div>

        <div className="user-nums">
          <div className="testcard">1</div>
          <div className="testcard">2</div>
          <div className="testcard">3</div>
        </div>
      </div>

      {nums.map((n, i) => (
        <div key={i}>{n}</div>
      ))}
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          margin: 5% auto;
          width: 60%;
          height: 80vh;
          border: 1px solid black;
          background-color: #fefefe;
          padding: 1rem;
          box-shadow: 0.8px 0.7px 1.2px rgba(0, 0, 0, 0.08),
            1.8px 1.6px 2.7px rgba(0, 0, 0, 0.063),
            3px 2.6px 4.6px rgba(0, 0, 0, 0.055),
            4.5px 4px 6.9px rgba(0, 0, 0, 0.049),
            6.5px 5.8px 10px rgba(0, 0, 0, 0.045),
            9.2px 8.2px 14.2px rgba(0, 0, 0, 0.04),
            13.1px 11.6px 20.1px rgba(0, 0, 0, 0.035),
            19px 16.8px 29.2px rgba(0, 0, 0, 0.031),
            29.3px 25.9px 45px rgba(0, 0, 0, 0.025),
            52px 46px 80px rgba(0, 0, 0, 0.017);
        }

        .background {
          background-image: url("https://cdn.discordapp.com/attachments/925363539873525780/992398469044117604/grass.png");

          width: 100vw;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1000;
        }

        .result {
          height: 10%;
          display: flex;
          border: 1px solid grey;
          margin-bottom: 1rem;
          align-items: center;
          justify-content: center;
        }

        .pc-nums,
        .user-nums {
          display: flex;
          height: 45%;
          justify-content: space-between;
        }

        .result-item {
          margin: 0 1rem;
        }
      `}</style>
    </div>
  );
};

export default NumBaseball;

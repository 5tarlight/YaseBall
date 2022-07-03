import { NextPage } from "next";
import { useEffect, useState } from "react";
import PcCard from "./PcCard";
import UserCard from "./UserCard";

interface Props {
  nums: number[];
  setNums: (nums: number[]) => void;
  uInput: number[];
  handleChange: (i: number, v: number) => void;
}

const NumBaseball: NextPage<Props> = ({
  nums,
  setNums,
  uInput,
  handleChange,
}) => {
  const [status, setStatus] = useState({
    s: 0,
    b: 0,
    o: 0,
  });

  const updateStatus = () => {
    const newStatus = {
      s: 0,
      b: 0,
      o: 0,
    };

    const strikes = [];
    for (let i = 0; i < 3; i++) {
      if (uInput[i] === nums[i]) {
        strikes.push(i);
        newStatus.s = newStatus.s + 1;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (strikes.includes(i)) continue;
      const index = nums.indexOf(uInput[i]);

      if (index !== -1 && !strikes.includes(i)) newStatus.b = newStatus.b + 1;
    }

    newStatus.o = 3 - (newStatus.b + newStatus.s);

    setStatus(newStatus);
  };

  useEffect(() => {
    updateStatus();
  }, [uInput]);

  useEffect(() => {
    const arr: number[] = [];
    for (let i = 0; i < 3; i++) {
      arr.push(Math.floor(Math.random() * 9) + 1);
    }

    setNums(arr);
  }, []);

  return (
    <div>
      <div className="background" />

      <div className="container">
        <div className="result">
          <div className="result-item">Strike : {status.s}</div>
          <div className="result-item">Ball : {status.b}</div>
          <div className="result-item">Out : {status.o}</div>
        </div>

        <div className="pc-nums">
          <PcCard number={nums[0]} />
          <PcCard number={nums[1]} />
          <PcCard number={nums[2]} />
        </div>

        <div className="user-nums">
          <UserCard uInputs={uInput} handleChange={handleChange} />
        </div>
      </div>
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

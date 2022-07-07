import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NumBaseball from "../components/NumBaseball";

const Algorithm: NextPage = () => {
  const [nums, setNums] = useState([-1, -1, -1]);
  const [uInput, setUserInput] = useState([0, 0, 0]);

  const handleChange = (i: number, v: number) => {
    const input = [...uInput];
    input[i] = Math.min(9, Math.max(1, v)) || 1;
    setUserInput(input);
  };

  const queue: number[][] = [];

  const change = (v: number[]) => {
    queue.push(v);
  };

  const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const ani = async () => {
    for (let q of queue) {
      setUserInput(q);
      await sleep(500);
    }
  };

  const printll = (table: number[][], total: number) => {
    for (let i = 0; i < total; i++)
      console.log(table[i][0], table[i][1], table[i][2], table[i][3]);
  };

  const findStrike = (forAnswer: number[], answer: number[]) => {
    let s = 0;
    for (let i = 0; i < 3; i++) if (answer[i] === forAnswer[i]) s++;

    return s;
  };

  const findBall = (forAnswer: number[], answer: number[]) => {
    let b = 0;
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        if (i !== j && answer[i] === forAnswer[j]) b++;

    return b;
  };

  const findForAnswer = (
    table: number[][],
    choice: number,
    forAnswer: number[]
  ) => {
    forAnswer[0] = table[choice][0];
    forAnswer[1] = table[choice][1];
    forAnswer[2] = table[choice][2];
  };

  /**
   *
   * @param table
   * @param total
   * @returns must re-define return value(total) to vars
   */
  const first = (table: number[][], total: number) => {
    const num = 9;

    for (let i = 0; i < num; i++) {
      for (let j = 0; j < num; j++) {
        for (let k = 0; k < num; k++) {
          table[total][0] = i + 1;
          table[total][1] = j + 1;
          table[total][2] = k + 1;

          if (i == j || i == k || j == k) table[total][3] = -1;
          else table[total][3] = 1;

          // total = Math.min(719, total + 1);
          total++;
        }
      }
    }

    return total;
  };

  const after = (
    table: number[][],
    forAnswer: number[],
    strike: number,
    ball: number,
    total: number
  ) => {
    if (strike === 3) return false;

    if (strike === 0 && ball === 0) {
      for (let i = 0; i < total; i++) {
        if (
          table[i][0] == forAnswer[0] ||
          table[i][0] == forAnswer[1] ||
          table[i][0] == forAnswer[2] ||
          table[i][1] == forAnswer[0] ||
          table[i][1] == forAnswer[1] ||
          table[i][1] == forAnswer[2] ||
          table[i][2] == forAnswer[0] ||
          table[i][2] == forAnswer[1] ||
          table[i][2] == forAnswer[2]
        )
          table[i][3] = -1;
      }
    }

    for (let i = 0; i < total; i++) {
      const s = findStrike(forAnswer, table[i]);
      const b = findBall(forAnswer, table[i]);

      if (s !== strike || b !== ball) table[i][3] = -1;
    }

    return true;
  };

  /**
   *
   * @param table
   * @param total
   * @return you must assign this return too
   */
  const remove = (table: number[][], total: number) => {
    for (let z = 0; z < total; z++) {
      for (let i = 0; i < total; i++) {
        for (let j = 0; j < total; j++) {
          if (table[j][3] === -1) {
            table[j][0] = table[total - 1][0];
            table[j][1] = table[total - 1][1];
            table[j][2] = table[total - 1][2];
            table[j][3] = table[total - 1][3];
            table[total - 1][3] = -1;
            total--;
          }
        }
      }
    }

    return total;
  };

  const start = () => {
    const table = Array.apply(null, Array(9 * 9 * 9)).map(() => [
      -1, -1, -1, -1,
    ]);
    let total = 0;
    let choice = 0;
    const forAnswer = [-1, -1, -1];
    let strike = 0;
    let ball = 0;
    let re = true;
    let num = 0;

    total = first(table, total);

    do {
      num++;
      choice = Math.floor(Math.random() * total) + 1;
      findForAnswer(table, choice, forAnswer);
      console.log("update!", forAnswer);

      change(forAnswer);

      strike = findStrike(forAnswer, nums);
      ball = findBall(forAnswer, nums);

      console.log(strike, "strike,", ball, "ball");

      re = after(table, forAnswer, strike, ball, total);
      total = remove(table, total);

      if (total == 0) {
        console.log("정답!");
        // ani();
        break;
      }
    } while (re);
  };

  useEffect(() => {
    // return if executed before initiated
    if (nums.includes(-1)) return;

    start();
  }, [nums]);

  return (
    <NumBaseball
      nums={nums}
      setNums={setNums}
      uInput={uInput}
      handleChange={handleChange}
    />
  );
};

export default Algorithm;

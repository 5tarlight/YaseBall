import { NextPage } from "next";

interface Props {
  uInputs: number[];
  handleChange: (i: number, v: number) => void;
}

const UserCard: NextPage<Props> = ({ uInputs, handleChange }) => {
  return (
    <div className="container">
      {uInputs.map((v, i) => {
        return (
          <input
            className="card"
            value={v}
            type="number"
            key={i}
            onKeyDown={(e) => {
              e.stopPropagation();
              e.preventDefault();
              const { key } = e;
              const v = parseInt(key);
              if (isNaN(v) || v == 0) return;
              handleChange(i, v);
            }}
          />
        );
      })}

      <style jsx>{`
        .container {
          display: flex;
          height: 95%;
          margin-top: 2%;
          justify-content: space-between;
          width: 100%;
        }

        .card {
          text-align: center;
          border: 10px solid rgb(238, 163, 56);
          border-radius: 20px;
          width: 30%;
          font-size: 10rem;
          height: 100%;
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        /* Firefox */
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export default UserCard;

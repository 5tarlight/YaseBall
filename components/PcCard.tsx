import { NextPage } from "next";

interface Props {
  number: number;
}

const PcCard: NextPage<Props> = ({ number }) => {
  return (
    <div>
      {number}
      <style jsx>{`
        div {
          display: flex;
          background-color: white;
          border: 10px solid rgb(195, 195, 195);
          border-radius: 20px;
          width: 30%;
          height: 100%;
          font-size: 10rem;
          text-align: center;
          justify-content: center;
          align-items: center;
          line-height: 100%;
          box-shadow: 0.2px 0.3px 1.2px rgba(0, 0, 0, 0.08),
            0.4px 0.6px 2.7px rgba(0, 0, 0, 0.063),
            0.7px 1px 4.6px rgba(0, 0, 0, 0.055),
            1px 1.6px 6.9px rgba(0, 0, 0, 0.049),
            1.5px 2.3px 10px rgba(0, 0, 0, 0.045),
            2.1px 3.2px 14.2px rgba(0, 0, 0, 0.04),
            3px 4.5px 20.1px rgba(0, 0, 0, 0.035),
            4.4px 6.6px 29.2px rgba(0, 0, 0, 0.031),
            6.8px 10.1px 45px rgba(0, 0, 0, 0.025),
            12px 18px 80px rgba(0, 0, 0, 0.017);
        }
      `}</style>
    </div>
  );
};

export default PcCard;

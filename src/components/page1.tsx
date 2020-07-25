import React from "react";
import { FillRect } from "./fillRect";
import { ClosePath } from "./closePath";

export const P1: React.FC = (): JSX.Element => {
  return (
    <>
      <div>fillRect</div>
      <FillRect />
      <div>closePath</div>
      <ClosePath />
    </>
  );
};

export default P1;

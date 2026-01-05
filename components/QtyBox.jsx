import React, { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { TfiAngleUp } from "react-icons/tfi";
import { Button } from "@mui/material";

const QtyBox = () => {
  const [qtyValue, setQtyValue] = useState(1);

  const minusQty = () => {
    setQtyValue((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="qtyBox border border-[rgba(0,0,0,0.2)] rounded-md flex items-center gap-1 w-[80px] h-[45px] relative">
      <input
        type="number"
        value={qtyValue}
        readOnly
        className="border-0 outline-none w-full h-full px-4 text-[14px] text-gray-800"
      />

      <div className="flex flex-col absolute top-0 right-0 h-full">
        <Button
          className="!min-w-[30px] !w-[30px] !h-1/2 !p-0 !text-gray-800"
          onClick={() => setQtyValue(qtyValue + 1)}
        >
          <TfiAngleUp size={16} />
        </Button>

        <Button
          className="!min-w-[30px] !w-[30px] !h-1/2 !p-0 !text-gray-800"
          onClick={minusQty}
        >
          <LiaAngleDownSolid size={17} />
        </Button>
      </div>
    </div>
  );
};

export default QtyBox;

import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Shop = () => {
  const [amount, setAmount] = useState(50);
  const dispatch = useDispatch();

  const deposit = () => {};
  return (
    <div>
      <h2>Deposit/Withdraw</h2>
      <button onClick={deposit} className="btn btn-primary mx-2">
        +
      </button>
      Update
      <button className="btn btn-primary mx-2">-</button>
    </div>
  );
};

export default Shop;

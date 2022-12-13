import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "./state/";

const Shop = () => {
  const [amount, setAmount] = useState(50);
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const deposit = () => {
    depositMoney(amount);
    setAmount(50);
  };

  const withdraw = () => {
    withdrawMoney(amount);
    setAmount(50);
  };

  return (
    <div>
      <h2>Deposit/Withdraw</h2>
      <button onClick={deposit} className="btn btn-primary mx-2">
        +
      </button>
      Update
      <button onClick={withdraw} className="btn btn-primary mx-2">
        -
      </button>
    </div>
  );
};

export default Shop;

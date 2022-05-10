/* eslint-disable jsx-a11y/no-static-element-interactions */
import StocksCharts from "components/StocksCharts/StocksCharts";
import React, { useState } from "react";
import "./Stocks.css";

function Stocks({ data }) {
  const [activeStock, setActiveStock] = useState("appl");

  const currentDay = "10-05-2022";

  const currentData = data[currentDay];

  const current = currentData[activeStock];

  const side = Object.keys(currentData).map((key) => (
    <div
      onClick={() => {
        setActiveStock(currentData[key].id);
      }}
    >
      <div>
        {currentData[key].name}
        {currentData[key].price}
      </div>
      <div>{currentData[key].change}</div>
    </div>
  ));

  return (
    <div className="stocks">
      <div>{side}</div>
      <div>
        <div>
          <h1>{current.name}</h1>
          <h3>{current.price}</h3>
        </div>
        <div>
          <div>
            Low: {current.low}
            High: {current.high}
            Open: {current.open}
          </div>
          <div>
            Market cap: {current.marketCap}
            Dividend yield: {current.dividend}
            P/E ratio (ttm): {current.peratio}
          </div>
        </div>
        <div style={{ display: "none" }}>
          <StocksCharts />
        </div>
      </div>
    </div>
  );
}

export default Stocks;

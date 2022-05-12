/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from "react";

import StocksCharts from "components/StocksCharts/StocksCharts";

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
      className="stocks-option"
    >
      <div>
        <p className="stocks-option-name">{currentData[key].name}</p>
        <p className="stocks-option-price"> {currentData[key].price}</p>
      </div>
      <div>
        <p className="stocks-option-change">{currentData[key].change}</p>
      </div>
    </div>
  ));

  return (
    <div className="stocks">
      <div className="stocks-options">{side}</div>
      <div className="active-stock-wrapper">
        <div className="active-stock">
          <div className="stock-main-info">
            <p className="stock-name">{current.name}</p>
            <p className="stock-price">{current.price}</p>
          </div>
          <div className="stock-extra-info">
            <div className="stock-extra-info-left">
              <p className="stock-low">
                {" "}
                <span className="info-label">Low:</span> {current.low}
              </p>
              <p className="stock-high">
                <span className="info-label">High:</span> {current.high}
              </p>
              <p className="stock-open">
                <span className="info-label">Open:</span> {current.open}
              </p>
            </div>
            <div className="stock-extra-info-right">
              <p className="stock-market-cap">
                <span className="info-label">Market cap:</span>{" "}
                {current.marketCap}
              </p>
              <p className="stock-dividend">
                <span className="info-label">Dividend yield:</span>{" "}
                {current.dividend}
              </p>
              <p className="stock-peratio">
                <span className="info-label">P/E ratio (ttm):</span>{" "}
                {current.peratio}
              </p>
            </div>
          </div>
        </div>
        <div className="stock-chart">
          <StocksCharts />
        </div>
      </div>
    </div>
  );
}

export default Stocks;

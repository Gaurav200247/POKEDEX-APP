import React from "react";

const STATS = ({ stats }) => {
  return (
    <div className="stats-container">
      <h3 className="stats-head">Base Stats</h3>

      <div className="stats-info-container">
        {stats.map((item, index) => {
          return (
            <div key={index} className="single-stats-container">
              <span
                className="stats-box"
                style={{ height: `${item.base_stat}%` }}
              >
                {item.base_stat}
              </span>
              <span className="stats-name">{item.stat.name.toUpperCase()}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default STATS;

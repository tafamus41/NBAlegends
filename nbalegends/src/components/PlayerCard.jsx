import React, { useState } from "react";

const PlayerCard = ({ img, name, statistics }) => {
  const [showStats, setShowStats] = useState(false);
  const change = () => setShowStats(!showStats);
  return (
    <div onClick={change} className="card col-md-6 col-lg-4 col-xl-3 ">
      {showStats ? (
        <ul className="listStats">
          {statistics.map((stat, index) => (
            <li key={index}>{stat}</li>
          ))}
        </ul>
      ) : (
        <>
          <img src={img} alt={`${name}`} />
        </>
      )}
      <p className="text-center fw-bold h4 p-3">{name}</p>
    </div>
  );
};

export default PlayerCard;

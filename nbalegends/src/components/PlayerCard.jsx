import React, { useState } from "react";

const PlayerCard = ({legend}) => {
  console.log(legend);
  const [image, setImage] = useState(false);
  const change = () => setImage(!image);
  return (
    <div onClick={change} className="card col-md-6 col-lg-4 col-xl-3 ">
      {image ? (
        <ul className="listStats">
          {legend.statistics.map((stat, index) => (
            <li key={index}>{stat}</li>
          ))}
        </ul>
      ) : (
        <>
          <img src={legend.img} alt={`${legend.name}`} />
        </>
      )}
      <p className="text-center fw-bold h4 p-3">{legend.name}</p>
    </div>
  );
};
export default PlayerCard;

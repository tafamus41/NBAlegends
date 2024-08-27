const PlayerCard = ({ name, img, statistics }) => {
console.log(statistics);
  const change=()=>{}
  return (
        <div className="card col-md-6 col-lg-4 col-xl-3 ">
            <img src={img} alt="" />
            <p className="text-center fw-bold h4 p-3">{name}</p>
        </div>
  );
};

export default PlayerCard;

import PlayerCard from "./PlayerCard";

const CardContainer = ({ nbaplayers }) => {
  console.log(nbaplayers);
  return (
    <div className="containerAll my-4 p-2">
         <div className="cardRow my-2">
      {nbaplayers.map((item) => (
        <PlayerCard key={item.name} {...item} />
      ))}
      </div>
    </div>
  );
};

export default CardContainer;

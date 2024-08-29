import PlayerCard from "./PlayerCard";
import { useState } from "react";
import {data} from "../helper/data"

const CardContainer = () => {
  console.log(data);
  const [search, setSearch] = useState("");
  return (
    <>
      <input
        type="search"
        className="input w-50"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Player..."
      />
      <div className="containerAll my-4 p-2">
        <div className="cardRow my-2">
          {data.filter((legend) => legend.name.toLowerCase().includes(search.trim().toLowerCase())
            ).map((legend) => (
              <PlayerCard key={legend.name} legend={legend} />
            ))}
        </div>
      </div>
    </>
  );
};

export default CardContainer;

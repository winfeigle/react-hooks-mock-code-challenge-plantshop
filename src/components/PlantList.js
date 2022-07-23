import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchQuery}) {

const plantCards = plants.map(plant => {
  if(plant.name.toLowerCase().includes(searchQuery.toLowerCase())){
    return <PlantCard key={plant.id} plant={plant}/>;
  } else{
    return null;
  }
})


  return (
    <ul className="cards">{plantCards}</ul>
  );

}

export default PlantList;

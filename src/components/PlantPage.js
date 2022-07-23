import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then(res => res.json())
      .then(data => setPlants(data))
  },[])


  const onFormSubmit = (formData) => {
    setPlants((prevPlants) => [...prevPlants, formData])
  }

  const onSearch = (search) => {
    setSearchQuery(search)
  }




  return (
    <main>
      <NewPlantForm onFormSubmit={onFormSubmit}/>
      <Search onSearch={onSearch}/>
      <PlantList plants={plants} searchQuery={searchQuery}/>
    </main>
  );
}

export default PlantPage;

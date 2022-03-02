import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then (res => res.json())
    // .then(console.log)
    .then(setPlants)
  }, [])

  function handleAddNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  const searchedPlant = plants.filter((plants) => (
    plants.name.toLowerCase().includes(searchTerm.toLowerCase())
  ))

  return (
    <main>
      <NewPlantForm handleAddNewPlant={handleAddNewPlant}/>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <PlantList plants={searchedPlant}/>
    </main>
  );
}

export default PlantPage;

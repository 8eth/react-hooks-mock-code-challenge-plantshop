import React, {useState} from "react";

function PlantCard({plants}) {
  const [inStock, setInStock] = useState(true)

  function handleButtonToggle() {
    setInStock(!inStock)
    // console.log("clicked")
  }

  return (
    <li className="card">
      <img src={plants.image} alt={plants.name} />
      <h4>{plants.name}</h4>
      <p>Price: {plants.price}</p>
      <button onClick = {handleButtonToggle} className={inStock ? "primary" : ""}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;

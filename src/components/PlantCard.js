import React, { useState } from "react";

function PlantCard({plant}) {
  const [ stock, setStock ] = useState(true)
  const { name, image, price } = plant;

  const handleClick = () => setStock(!stock);


  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: ${price}</p>
      {stock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;

import React, { useState } from "react";

function NewPlantForm({ onFormSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(plant => {
        //send form data to database:
        onFormSubmit(plant)
        //Reset form data after submitting:
        setFormData({
          name: "",
          image: "",
          price: ""
        });
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({...formData, [name]: value}))
  };


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={handleChange} 
          type="text" 
          name="name" 
          placeholder="Plant name" 
          value={formData.name}
          />
        <input 
          onChange={handleChange} 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image}
          />
        <input 
          onChange={handleChange} 
          type="number" 
          name="price" 
          step="0.01" 
          placeholder="Price" 
          value={formData.price}
          />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

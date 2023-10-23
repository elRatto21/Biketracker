import { useState } from "react";
import axios from "axios";
import './CreateBike.css'

function CreateBike() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [horsepower, setHorsepower] = useState();
  const [weight, setWeight] = useState();
  const [mileage, setMileage] = useState();

  const handleSubmit = (e) => {
    let data = JSON.stringify({
      manufacturer: manufacturer,
      model: model,
      horsepower: horsepower,
      weight: weight,
      mileage: mileage,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/bike",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios.request(config).then((response) => {
      window.location.href = "/";
    });

    e.preventDefault();
  };

  return (
    <div className="parent">
      <h1>Create new Bike</h1>
      <form className="container">
        <label htmlFor="manufacturer">Manufacturer</label>
        <br />
        <input
          id="manufacturer"
          type="text"
          required
          value={manufacturer}
          onChange={(e) => setManufacturer(e.target.value)}
        />
        <br />

        <label htmlFor="model">Model</label>
        <br />
        <input
          id="model"
          type="text"
          required
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <br />

        <label htmlFor="horsepower">Horsepower</label>
        <br />
        <input
          id="horsepower"
          type="text"
          required
          value={horsepower}
          onChange={(e) => setHorsepower(e.target.value)}
        />
        <br />

        <label htmlFor="weight">Weight</label>
        <br />
        <input
          id="weight"
          type="text"
          required
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <br />

        <label htmlFor="mileage">Mileage</label>
        <br />
        <input
          id="mileage"
          type="text"
          required
          value={mileage}
          onChange={(e) => setMileage(e.target.value)}
        />
        <br />

        <button type="button" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateBike;

import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

function Home() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setBikes([]);
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "http://backend:8080/api/bike",
    };
    axios
      .request(config)
      .then((response) => {
        setBikes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="parent">
    <h1>Biketracker</h1>
      <div className="container">
        <div className="title">Bikes</div>
        <table>
          <thead>
            <tr>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Horsepower</th>
              <th>Weight</th>
              <th>Mileage</th>
            </tr>
          </thead>
          <tbody>
            {bikes.map((bike) => (
              <tr key={bike.bikeId}>
                <td>{bike.manufacturer}</td>
                <td>{bike.model}</td>
                <td>{bike.horsepower}</td>
                <td>{bike.weight}</td>
                <td>{bike.mileage}</td>
                <td>
                  <a href={bike.bikeId}>Details</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a className="btn" href="/add">Add bike</a>
    </div>
  );
}

export default Home;

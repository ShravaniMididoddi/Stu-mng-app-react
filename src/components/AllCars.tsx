import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

export default function AllCars() {
  const [carData, setCarData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9090/arun-show-room/car/get/all")
      .then((res) => {
        setCarData(res.data);
      });
  }, []);

  return (
    <div>
      <NavBar />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">ImgUrl</th>

            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {carData.map((eachRec) => (
            <tr>
              <th>
                <img src={eachRec.imgUrl} width={400} height={200}/>
              </th>

              <th>{eachRec.brand}</th>
              <td>{eachRec.model}</td>
              <td>{eachRec.year}</td>
              <td>{eachRec.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
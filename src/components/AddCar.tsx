import  { useState } from "react";
import NavBar from "./NavBar";
import "../css/addcar.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddCar() {

const carNav = useNavigate();

  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const getModel = (e: any) => {
    setModel(e.target.value);
  };
  const getBrand = (e: any) => {
    setBrand(e.target.value);
  };
  const getYear = (e: any) => {
    setYear(e.target.value);
  };
  const getPrice = (e: any) => {
    setPrice(e.target.value);
  };
  const getImgUrl = (e: any) => {
    setImgUrl(e.target.value);
  };

  const saveCar = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("brand---->" + brand);
    console.log("model---->" + model);
    console.log("year---->" + year);
    console.log("price---->" + price);
    console.log("img url---->" + imgUrl);

    const carJson = { brand, model, year, price, imgUrl };
    axios
      .post("http://localhost:9090/arun-show-room/car/add", carJson)
      .then((res) => {
        console.log("res from spring boot-->" + res.data);
        carNav("/allCars")
      });
  };

  return (
    <div className="carcolor">
      <NavBar />

      <form onSubmit={saveCar} className="carmar">
        <div className="form-group">
          <label>Brand Name</label>
          <input
            type="text"
            onChange={getBrand}
            className="form-control"
            placeholder="Enter brand name"
          />
        </div>
        <div className="form-group">
          <label>Model</label>
          <input
            type="text"
            onChange={getModel}
            className="form-control"
            placeholder="Enter Model"
          />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input
            type="text"
            onChange={getYear}
            className="form-control"
            placeholder="Enter Year"
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            onChange={getPrice}
            className="form-control"
            placeholder="Enter Price"
          />
        </div>
        <div className="form-group">
          <label>Img URL</label>
          <input
            type="text"
            onChange={getImgUrl}
            className="form-control"
            placeholder="Enter img url"
          />
        </div>

        <br />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
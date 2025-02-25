import { BrowserRouter, Route, Routes } from "react-router-dom";
//import DisplayAll from "./components/DisplayAll";
import SearchStudent from "./components/SearchStudent";
import AddStudent from "./components/AddStudent";
import DeleteStudent from "./components/DeleteStudent";
import AddCar from "./components/AddCar";
import ShowAllStus from "./components/ShowAllStus";
import AllCars from "./components/AllCars";
import Login from "./components/Login";

export default function NavBar() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path= '/showAll' element ={<ShowAllStus/>}/>
        <Route path= '/allcars' element ={<AllCars/>}/>
        <Route path= '/add' element ={<AddStudent/>}/>
        <Route path= '/search' element ={<SearchStudent/>}/>
        <Route path= '/del' element ={<DeleteStudent/>}/>
        <Route path="/addCar" element={<AddCar/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

import NavBar from "./NavBar";
import '../css/my-mar-stu.css'
import { useState } from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom";
export default function AddStudent() {

  const disAll = useNavigate();

  const [name,setName] = useState('');
  const [rollNo,setRollNo] = useState('');
  const [math, setMath] = useState("");
  const [science, setScience] = useState("");
  const [english, setEnglish] = useState("");
  const [fee,setFee] = useState('');
  const [course,setCourse] = useState('');
  const saveStu= (e:FormDataEvent)=>{
    e.preventDefault();
    console.log("submit button clicked!!")
    console.log("Roll No--->"+rollNo)
    console.log("Name--->"+name)
    console.log("Mathematics Marks--->"+math)
    console.log("Science Marks--->" + science);
    console.log("English Marks--->" + english);
    console.log("Fee--->"+fee)
    console.log("Course--->"+course)
    const student = {rollNo,name,math,science,english,fee,course};

axios.post("http://localhost:9090/stu/mng/add",student)
.then((res)=>{
  console.log(res.data);
  disAll("/showAll");
});
  };
  const getRollNo = (e:any)=>{
    setRollNo(e.target.value);
    
  }
  const getName = (e:any)=>{
    setName(e.target.value);
    
  }
  const getMaths = (e: any) => {
    setMath(e.target.value);
  };
  const getScience = (e: any) => {
    setScience(e.target.value);
  };
  const getEnglish = (e: any) => {
    setEnglish(e.target.value);
  };
  const getFee = (e:any)=>{
    setFee(e.target.value);
    
  }
  const getCourse = (e:any)=>{
    setCourse(e.target.value);
    
  }
  return (
    <div>
      <NavBar />
      <form 
      onSubmit={saveStu}
      className="stu-add-mar">
        <div className="form-group">
          <label>Roll No</label>
          <input
            type="text"
            onChange={getRollNo}
            className="form-control"
            placeholder="Enter Roll No"
          ></input>
          <br />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            onChange={getName}
            className="form-control"
            id="exampleInputName1"
            placeholder="Enter Name"
          ></input>
          <br />
        </div>
        <div className="form-group">
          <label>Mathematics Marks</label>
          <input
            type="text"
            onChange={getMaths}
            className="form-control"
            placeholder="Enter Marks "
          /><br/>
        <div className="form-group">
          <label>Science Marks</label>
          <input
            type="text"
            onChange={getScience}
            className="form-control"

            placeholder="Enter Marks "
          /><br/>
        </div>
        <div className="form-group">
          <label>English Marks</label>
          <input
            type="text"
            onChange={getEnglish}
            className="form-control"
            placeholder="Enter Marks "
          />
        </div>
         <br />
        </div>
        <div className="form-group">
          <label>Fee</label>
          <input
          onChange={getFee}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Fee"
          /> <br />
        </div>
        <div className="form-group">
          <label>Course</label>
          <input
          onChange={getCourse}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Course"
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

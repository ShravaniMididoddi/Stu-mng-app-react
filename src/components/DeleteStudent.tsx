import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function DeleteStudent() {
  const [rollNo, setRollNo] = useState("");
  const delNav = useNavigate();
  const getRollNo = (e: any) => {
    setRollNo(e.target.value);
  };

  const deleteStudent = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("del button clicked!!!!");
    console.log("rollno===>" + rollNo);

    axios
      .delete("http://localhost:9090/stu/mng/del?rollNo=" + rollNo)
      .then((res) => {
        console.log("res data--->" + res.data);
        delNav("/showAll");
      });
  };


  return (
    <div>
      <NavBar />
      
      <form onSubmit={deleteStudent} className="stu-add-mar">
        <div className="form-group">
          <label>RollNo</label>
          <input
            type="text"
            onChange={getRollNo}
            className="form-control"
            placeholder="Enter Roll no"
          />
        </div>

        <br />
        <button type="submit" className="btn btn-primary">
          DELETE
        </button>
      </form>

      
      
      </div>
  )
}
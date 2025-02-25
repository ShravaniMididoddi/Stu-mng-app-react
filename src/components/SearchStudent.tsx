import React, { useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

export default function SearchStudent() {
  const [rollNo, setRollNo] = useState("");

  const [stuRec, setStuRec] = useState(null);

  const searchStudent = (e: FormDataEvent) => {
    e.preventDefault();
    console.log("search button clicked!!!!");
    console.log("rollno===>" + rollNo);

    axios
      .get("http://localhost:9090/stu/mng/get/one?rollNo=" + rollNo)
      .then((res) => {
        console.log("res data--->" + res.data);
        setStuRec(res.data);
      });
  };

  const getRollNo = (e: any) => {
    setRollNo(e.target.value);
  };

  return (
    <div>
      <NavBar />

      <form onSubmit={searchStudent} className="stu-add-mar">
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
          SEARCH
        </button>
      </form>

      {(stuRec != null) && ( stuRec.rollNo != 0) ? (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Roll No</th>
                <th scope="col">Name</th>
                <th scope="col">Maths</th>
                <th scope="col">Science</th>
                <th scope="col">English</th>
                <th scope="col">Fee</th>
                <th scope="col">Course</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{stuRec.rollNo}</th>
                <td>{stuRec.name}</td>
                <td>{stuRec.math}</td>
                <td>{stuRec.science}</td>
                <th>{stuRec.english}</th>
                <td>{stuRec.fee}</td>
                <td>{stuRec.course}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) :    stuRec == null? "":(
        " No Student Rec Found!!!!"
      )}
    </div>
  );
}
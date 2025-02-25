import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import axios from "axios";

export default function ShowAllStus() {
  const [stuData, setStuData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:9090/stu/mng/get/all").then((res) => {
      setStuData(res.data);
    });
  }, []);

  return (
    <div>
      <NavBar />

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
          {stuData.map((eachRec) => (
            <tr>
              <th>{eachRec.rollNo}</th>
              <td>{eachRec.name}</td>
              <td>{eachRec.math}</td>
              <td>{eachRec.science}</td>
              <th>{eachRec.english}</th>
              <td>{eachRec.fee}</td>
              <td>{eachRec.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
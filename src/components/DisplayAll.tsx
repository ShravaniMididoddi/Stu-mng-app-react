import NavBar from "./NavBar";

export default function DisplayAll() {
  const stuData = [
    {
      rollNo: 12345,
      name: "Abdul Rahman",
      math: 88,
      science: 99,
      english: 77,
      fee: 78000,
      course: "CSE",
    },
    {
      rollNo: 334455,
      name: "Shyam",
      math: 77,
      science: 88,
      english: 99,
      fee: 98000,
      course: "IT",
    },
  ];

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
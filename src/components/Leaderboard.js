import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import {
  faHouse,
  faChartLine,
  faFileExcel,
  faTv,
  faNewspaper,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Navbar1 from "./Navbar1";
import { useEffect } from "react";
import {useParams} from "react-router-dom"
const Leaderboard = () => {
const {id}=useParams()
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStuds, setFilteredStuds] = useState([]);
  const [studs, setStuds] = useState([]);
  // reference
  // const studs = [
  //   {
  //     1234: 0,
  //     12345678: 0,
  //     123456789: 0,
  //     1234567891: 0,
  //     id: 10,
  //     email: "LOKI007@AIL.COM",
  //     department: "CSE",
  //     test1: 0,
  //   },
  //   {
  //     1234: 30,
  //     12345678: 0,
  //     123456789: 0,
  //     1234567891: 14,
  //     id: 3,
  //     email: "mdfawaz044@gmail.com",
  //     department: "CSE",
  //     test1: 0,
  //   },
  // ];
  useEffect(() => {
    axios
      .get(`http://localhost:5000/leaderboard/${id}`)
      .then((response) => {
        setStuds(response.data);
        setFilteredStuds(response.data);
        console.log(response.data)

      })
      .catch((error) => {
        console.error("Error fetching leaderboard data:", error);
      });
  }, []);

  studs.forEach((student) => {
    let totalMarks = 0;
    for (let test in student) {
      if (
        test !== "id" &&
        test !== "email" &&
        test !== "department" &&
        test !== "totalMarks"
      ) {
        totalMarks += student[test];
      }
    }
    student.totalMarks = totalMarks;
  });
  studs.sort((a, b) => b.totalMarks - a.totalMarks);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    filterStudents(e.target.value);
  };

  const filterStudents = (query) => {
    const filtered = studs.filter((student) =>
      Object.values(student).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredStuds(filtered);
  };

  const handleSearch = () => {
    filterStudents(searchQuery);
  };

  // const handleSearch = () => {
  //   // Implement your search logic here, e.g., make an API call with the searchQuery
  //   console.log("Searching for:", searchQuery);
  // };
  return (
    <div>
      <Navbar1 />

      <div className="center-container">
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>Leaderboard</h1>
        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "20px" }}>
          Discover achievements and rivals on our vibrant leaderboard - your hub
          for tracking scores and embracing friendly competition!
        </p>
      </div>

      <div className="lead-container">
        <div className="lead-left">
          <p style={{ color: "grey", marginBottom: "20px", fontWeight: "600" }}>
            ANALYTICS
          </p>
          <div className="left-opt">
            <FontAwesomeIcon
              icon={faHouse}
              style={{ color: "#28679E", marginRight: "8px" }}
            />
            <p>Overview</p>
          </div>
          <div className="left-opt">
            <FontAwesomeIcon
              icon={faChartLine}
              style={{ color: "#28679E", marginRight: "8px" }}
            />
            <p>Insights</p>
          </div>
          <div className="left-opt">
            <FontAwesomeIcon
              icon={faFileExcel}
              style={{ color: "#28679E", marginRight: "8px" }}
            />
            <p>Spreadsheet</p>
          </div>
          <hr />

          <div className="lead-left1">
            <p
              style={{ color: "grey", marginBottom: "25px", fontWeight: "600" }}
            >
              DEPARTMENT
            </p>
            <p style={{ fontWeight: "500", marginBottom: "20px" }}>CSE</p>
            <p style={{ fontWeight: "500", marginBottom: "20px" }}>IT</p>
            <p style={{ fontWeight: "500", marginBottom: "20px" }}>CSBS</p>
            <p style={{ fontWeight: "500", marginBottom: "20px" }}>AIDS</p>
            <p style={{ fontWeight: "500", marginBottom: "20px" }}>AIML</p>
            <p style={{ fontWeight: "500", marginBottom: "20px" }}>CS-CY</p>
            <p style={{ fontWeight: "500", marginBottom: "20px" }}>ECE</p>
            <p style={{ fontWeight: "500", marginBottom: "20px" }}>EEE</p>
            <p style={{ fontWeight: "500", marginBottom: "20px" }}>MECH</p>
            <p style={{ fontWeight: "500", marginBottom: "20px" }}>MCT</p>
            <p style={{ fontWeight: "500", marginBottom: "20px" }}>CIVIL</p>
            <p style={{ fontWeight: "500", marginBottom: "20px" }}>BME</p>
            <hr />
          </div>

          <div className="lead-left1">
            <p
              style={{ color: "grey", marginBottom: "20px", fontWeight: "600" }}
            >
              OTHERS
            </p>
            <div className="left-opt">
              <FontAwesomeIcon
                icon={faHouse}
                style={{ color: "#28679E", marginRight: "8px" }}
              />
              <p>Home</p>
            </div>
            <div className="left-opt">
              <FontAwesomeIcon
                icon={faNewspaper}
                style={{ color: "#28679E", marginRight: "8px" }}
              />
              <p>Questionbank</p>
            </div>
            <div className="left-opt">
              <FontAwesomeIcon
                icon={faTv}
                style={{ color: "#28679E", marginRight: "8px" }}
              />
              <p>Resource</p>
            </div>
            <div className="left-opt">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                style={{ color: "#28679E", marginRight: "8px" }}
              />
              <p>Logout</p>
            </div>
          </div>
        </div>

        <div className="lead-right">
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Email or dept or marks..."
              value={searchQuery}
              onChange={handleInputChange}
              className="search-input"
            />
            <button onClick={handleSearch} className="search-button">
              Search
            </button>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Total Marks</th>
                </tr>
              </thead>
              <tbody>
                {filteredStuds.map((student, index) => (
                  <tr key={index}>
                    <td>{student.email}</td>
                    <td>{student.totalMarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Leaderboard;

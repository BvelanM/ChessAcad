import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import AdminNavbar from "../Components/AdminNavBar"

function ManageCourses() {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem("token"); 
   const [courseID, setCourseID] = useState(0);
   const [courseName, setCourseName] = useState("");
   const [coursePrice, setCoursePrice] = useState(0);
   const [hours, setHours] = useState(0);
   const [mentorId, setMentorId] = useState(0);
 useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:8080/chessacad/course/all", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setCourses(data);
        setCourseName(data.courseName);
        setCoursePrice(data.coursePrice);
        setHours(data.Hours);
        setMentorId(data.mentorId);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
 }, []); 




  const columns = [
    { field: "courseID", headerName: "Course ID", width: 130 },
    { field: "courseName", headerName: "Course Name", width: 200 },
    { field: "coursePrice", headerName: "Course Price", width: 130 },
    { field: "hours", headerName: "Hours", width: 130 },
    { field: "mentorId", headerName: "Mentor ID", width: 130 },
  ];

  const handleDeleteCourse = (id) => {
    // Implement delete logic here
  };

  const handleAddCourse = () => {
    // Implement add logic here
  };

  return (
    <div>
      <AdminNavbar />
      {/* <Button variant="contained" color="primary" onClick={handleAddCourse}>
        Add Course
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          handleDeleteCourse(/* Pass the selected course ID here )
        }
      >
        Delete Course
      </Button> */}
      <div style={{ height: 800, width: "100%", margin: 10 }}>
        <DataGrid
          rows={courses}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          getRowId={(row) => row.courseID}
        />
      </div>
    </div>
  );
}

export default ManageCourses;

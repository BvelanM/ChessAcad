import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import AdminNavBar from "../Components/AdminNavBar";

function ManageMentors() {
  const [mentors, setMentors] = useState([]);
  const token = localStorage.getItem("token"); // Assuming you have a token for authentication
  const [mentorId, setMentorId] = useState(0);
  const [mentorName, setMentorName] = useState("");
  const [contact, setContact] = useState(0);
  const [courseId, setCourseId] = useState(0);
  

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/chessacad/mentor/all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMentors(data);
      } catch (error) {
        console.error("Error fetching mentors:", error);
      }
    };

    fetchMentors();
  }, []);

  const columns = [
    { field: "mentorId", headerName: "Mentor ID", width: 130 },
    { field: "mentorName", headerName: "Mentor Name", width: 200 },
    { field: "contact", headerName: "Contact", width: 130 },
    { field: "courseId", headerName: "Course ID", width: 130 },
  ];

  const handleDeleteMentor = (id) => {
    // Implement delete logic here
  };

  const handleAddMentor = () => {
    // Implement add logic here
  };

  return (
    <div>
      <AdminNavBar />
      {/* <Button variant="contained" color="primary" onClick={handleAddMentor}>
        Add Mentor
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() =>
          handleDeleteMentor(/* Pass the selected mentor ID here )
        }
      >
        Delete Mentor
      </Button> */}
      <div style={{ height: 800, width: "100%", margin: 10 }}>
        <DataGrid
          rows={mentors}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          // checkboxSelection
          getRowId={(row) => row.mentorId}
        />
      </div>
    </div>
  );
}

export default ManageMentors;

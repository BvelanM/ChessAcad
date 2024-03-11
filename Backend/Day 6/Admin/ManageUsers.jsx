// import React, { useEffect, useState } from "react";
// import {
//   DataGrid,
//   GridToolbarDensitySelector,
//   GridToolbarFilterButton,
// } from "@mui/x-data-grid";
// import AdminNavBar from "../Components/AdminNavBar";
// import {
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   TextField,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const columns = [
//   { field: "firstName", headerName: "First Name", width: 130 },
//   { field: "email", headerName: "Email", width: 200 },
//   { field: "contactNumber", headerName: "Contact Number", width: 200 },
//   { field: "bio", headerName: "Bio", width: 200 },
//   { field: "achievements", headerName: "Achievements", width: 200 },
//   { field: "ranking", headerName: "Ranking", width: 200 },
// ];

// function ManageUsers() {
//   const [users, setUsers] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const navigate = useNavigate();
//   const [firstName, setFirstName] = useState("");
//   const [email, setEmail] = useState("");
//   const [contactNumber, setContactNumber] = useState(0);
//   const [bio, setBio] = useState("");
//   const [achievements, setAchievements] = useState("");
//   const [ranking, setRanking] = useState("");
//   const token = localStorage.getItem("token");
//   console.log(token);
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch(
//           "http://localhost:8080/chessacad/user/all",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setUsers(data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     fetchUsers();
//   }, []);
//   const handleClickOpen = (user) => {
//     setSelectedUser(user);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleAddUser = () => {
//     fetch("http://localhost:8080/chessacad/user/add", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Assuming you have a token for authentication
//       },
//       body: JSON.stringify({
//         firstName: firstName,
//         email: email,
//         contactNumber: contactNumber,
//         ranking: ranking,
//         bio: bio,
//         achievements: achievements,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response, e.g., update the UI
//         setOpen(false);
//         // You might want to refetch the users to reflect the changes
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const handleEditUser = () => {
//     fetch(`http://localhost:8080/chessacad/user/update/${selectedUser.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Assuming you have a token for authentication
//       },
//       body: JSON.stringify(selectedUser),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response, e.g., update the UI
//         setOpen(false);
//         // You might want to refetch the users to reflect the changes
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   const handleDeleteUser = (id) => {
//     fetch(`http://localhost:8080/chessacad/user/delete/${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`, // Assuming you have a token for authentication
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the response, e.g., update the UI
//         // You might want to refetch the users to reflect the changes
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div>
//       <AdminNavBar />
//       <div style={{ height: 800, width: "100%", margin: 10 }}>
//         <DataGrid
//           rows={users}
//           columns={columns}
//           pageSize={10}
//           rowsPerPageOptions={[10]}
//           //   checkboxSelection
//           getRowId={(row) => row.userId}
//         />
//       </div>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>{"Edit User"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText>Edit the user details here.</DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Name"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={selectedUser?.name}
//             onChange={(e) =>
//               setSelectedUser({ ...selectedUser, name: e.target.value })
//             }
//           />
//           {/* Add more fields as needed */}
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleEditUser}>Save</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default ManageUsers;
import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import AdminNavBar from "../Components/AdminNavBar";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "firstName", headerName: "First Name", width: 130 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "contactNumber", headerName: "Contact Number", width: 200 },
  { field: "bio", headerName: "Bio", width: 200 },
  { field: "achievements", headerName: "Achievements", width: 200 },
  { field: "ranking", headerName: "Ranking", width: 200 },
];

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    contactNumber: "",
    bio: "",
    achievements: "",
    ranking: "",
  });
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/chessacad/user/all",
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
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleOpen = (user = null) => {
    if (user) {
      setFormData({
        firstName: user.firstName,
        email: user.email,
        contactNumber: user.contactNumber,
        bio: user.bio,
        achievements: user.achievements,
        ranking: user.ranking,
      });
    } else {
      setFormData({
        firstName: "",
        email: "",
        contactNumber: "",
        bio: "",
        achievements: "",
        ranking: "",
      });
    }
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      if (selectedUser) {
        const response = await fetch(
          `http://localhost:8080/chessacad/user/update/${selectedUser.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const updatedUser = await response.json();
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === selectedUser.id ? { ...user, ...updatedUser } : user
          )
        );
      } else {
        const response = await fetch(
          "http://localhost:8080/chessacad/user/add",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const newUser = await response.json();
        setUsers((prevUsers) => [...prevUsers, newUser]);
      }
      handleClose();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/chessacad/user/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <AdminNavBar />
      <div style={{ height: 800, width: "100%", margin: 10 }}>
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          getRowId={(row) => row.userId}
        />
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{selectedUser ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit the user details here.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
            value={formData.firstName}
            onChange={handleChange}
          />
          {/* Add more fields as needed */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ManageUsers;
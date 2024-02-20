import { useState } from "react";
import LoginPage from "./Login";
import "../../assets/css/start.css";
import SignUpPage from "./Signin";
const StartPage = () => {
 return (
   <>
       <div className="startContainer">
         <div style={{ borderRight: "3px solid black" }}>
           <LoginPage />
         </div>
         <SignUpPage />
       </div>

   </>
 );
}

export default StartPage;
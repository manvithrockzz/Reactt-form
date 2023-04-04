
// import React, { useState } from "react"
// import "./Right.css"
// import Coustomselect from "./Coustomselect";

// function RightComponenet() {


//     const options = [
//         { value: "HTML", label: "HTML" },
//         { value: "CSS", label: "CSS" },
//         { value: "JavaScript", label: "JavaScript" },
//         { value: "Node JS", label: "Node JS" },
//     ];

//     const handleChange = selectedOption => {
//         console.log('handleChange', selectedOption)

//     }
    

//     return (

//         <>
       
//         <button style={{ width: "390px", height: "55px", color: "white", fontSize: "17px"}} className="submitBtn
        
        
// ">Try it free 7 days then ₹180/mo. thereafter</button>


//         <div className="Container">


//             <div className="label">
//                 <label></label>
//                 <input type="text" name="username" placeholder="Enter Your Name" style={{ height: "30px" }} />

//             </div>

//             <div className="label">
//                 <label></label>
//                 <input type="text" name="Email" placeholder="Enter your email id" style={{ height: "30px" }} />

//             </div>
//             <div className="label">
//                 <label></label>
//                 <input type="text" name="password" placeholder="Password" style={{ height: "30px" }} />

//             </div>
//             <Coustomselect></Coustomselect>


//             <button style={{ color: "white" }} className="submitbutton">CLAIM YOUR FREE TRAIL</button>
//             <p> &nbsp; &nbsp; &nbsp; &nbsp;  By clicking the button you are agreeing to our <span className="footertext">Terms and Services</span></p>



//         </div>

//         </>

//     )

// }


// export default RightComponenet;



// import React, { useState, useEffect } from "react";
// import "./Right.css";
// import Coustomselect from "./Coustomselect";

// function RightComponenet() {
//   const options = [
//     { value: "HTML", label: "HTML" },
//     { value: "CSS", label: "CSS" },
//     { value: "JavaScript", label: "JavaScript" },
//     { value: "Node JS", label: "Node JS" },
//   ];

//   const handleChange = (selectedOption) => {
//     console.log("handleChange", selectedOption);
//   };

//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isFormFilled, setIsFormFilled] = useState(false);

//   useEffect(() => {
//     setIsFormFilled(username !== "" && email !== "" && password !== "");
//   }, [username, email, password]);

//   return (
//     <>
//       <button
//         style={{
//           width: "390px",
//           height: "55px",
//           color: "white",
//           fontSize: "17px",
//         }}
//         className="submitBtn"
//       >
//         Try it free 7 days then ₹180/mo. thereafter
//       </button>

//       <div className="Container">
//         <div className="label">
//           <label></label>
//           <input
//             type="text"
//             name="username"
//             placeholder="Enter Your Name"
//             style={{ height: "30px" }}
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>

//         <div className="label">
//           <label></label>
//           <input
//             type="text"
//             name="Email"
//             placeholder="Enter your email id"
//             style={{ height: "30px" }}
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="label">
//           <label></label>
//           <input
//             type="text"
//             name="password"
//             placeholder="Password"
//             style={{ height: "30px" }}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <Coustomselect></Coustomselect>

//         <button
//           style={{
//             backgroundColor: isFormFilled ? "green" : "grey",color: "white",
//           }}
//           className="submitbutton"
//           disabled={!isFormFilled}
//         >
//           CLAIM YOUR FREE TRAIL
//         </button>
//         <p>
//           {" "}
//           &nbsp; &nbsp; &nbsp; &nbsp; By clicking the button you are agreeing to
//           our <span className="footertext">Terms and Services</span>
//         </p>
//       </div>
//     </>
//   );
// }

// export default RightComponenet;

import React, { useState, useEffect } from "react";
import "./Right.css";
import Coustomselect from "./Coustomselect";

function RightComponenet() {
  const options = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Node JS", label: "Node JS" },
  ];

  const handleChange = (selectedOption) => {
    console.log("handleChange", selectedOption);
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsFormFilled(username !== "" && email !== "" && password !== "");
  }, [username, email, password]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <button
        style={{
          width: "390px",
          height: "55px",
          color: "white",
          fontSize: "17px",
        }}
        className="submitBtn"
      >
        {isSubmitted ? "You have successfully subscribed to our plan " : "Try it free 7 days then ₹180/mo. thereafter"}
      </button>

      <div className="Container">
        <form onSubmit={handleFormSubmit}>
          <div className="label">
            <label></label>
            <input
              type="text"
              name="username"
              placeholder="Enter Your Name"
              style={{ height: "30px" }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="label">
            <label></label>
            <input
              type="text"
              name="Email"
              placeholder="Enter your email id"
              style={{ height: "30px" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="label">
            <label></label>
            <input
              type="text"
              name="password"
              placeholder="Password"
              style={{ height: "30px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Coustomselect></Coustomselect>

          <button
            style={{
              backgroundColor: isFormFilled ? "green" : "grey",
              color: "white",
            }}
            className="submitbutton"
            disabled={!isFormFilled}
          >
            CLAIM YOUR FREE TRAIL
          </button>
          <p>
            {" "}
             By clicking the button you are agreeing
            to our <span className="footertext">Terms and Services</span>
          </p>
        </form>
      </div>
    </>
  );
}

export default RightComponenet;

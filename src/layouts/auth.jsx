// import React from "react";
// import Bgpic from "../assets/images/register_bg_2.png"; // Import the image
// import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// // Components
// import Navbar from "../components/navbar.jsx";

// // Views
// import Login from "../pages/login.jsx";
// import Register from "../pages/register.jsx";

// export default function Auth() {
//   return (
//     <>
//       <Navbar transparent />
//       <main>
//         <section className="relative w-full h-full py-40 min-h-screen">
//           {/* Background Image */}
//           <div
//             className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
//             style={{
//               backgroundImage: `url(${Bgpic})`, // Use the imported image directly
//             }}
//           ></div>

//           {/* Routes */}
//           <Routes>
//             <Route path="/auth/login" element={<Login />} /> {/* Use `element` instead of `component` */}
//             <Route path="/auth/register" element={<Register />} />
//             <Route path="*" element={<Navigate to="/" replace />} /> Redirect all unknown paths to `/`
            
//           </Routes>

//           {/* <FooterSmall absolute /> */}
//         </section>
//       </main>


//     </>
//   );
// }

import React from "react";
import Bgpic from "../assets/images/register_bg_2.png"; // Import the image
import { Outlet } from "react-router-dom"; // Import Outlet

// Components
import Navbar from "../components/auth_navbar.jsx";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          {/* Background Image */}
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: `url(${Bgpic})`, // Use the imported image directly
            }}
          ></div>

          {/* Render nested routes here */}
          <Outlet /> {/* Outlet is placed here */}
        </section>
      </main>
    </>
  );
}
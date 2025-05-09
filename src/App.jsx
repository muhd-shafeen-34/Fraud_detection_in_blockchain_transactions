// // import { useState } from 'react'
// // import "./assets/styles/tailwind.css";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import "@fortawesome/fontawesome-free/css/all.min.css";
// // import Sidebar from "./components/sidebar";
// // // import Admindashboard from "./pages/admin/admindashboard";
// // // import Admintransactions from "./pages/admin/admintransactions";
// // // import Usermanagement from "./pages/admin/usermanagement";
// // import Userdashboard from "./pages/user/userdashboard";
// // import Usertransactions from "./pages/user/usertransactions";  // ✅ User Transaction Page
// // import Profile from "./pages/user/profile";


// // import Auth from "./layouts/auth.jsx"

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Common Routes */}
// //         <Route path="/auth/*" element={<Auth />} />

// //         {/* User Routes */}
// //         <Route path="/dashboard" element={<Userdashboard />} />
// //         <Route path="/transactions" element={<Usertransactions />} />  {/* ✅ Add Route */}
// //         <Route path="/profile" element={<Profile />} />

// //         {/* Admin Routes */}
// //         {/* <Route path="/admin/dashboard" element={<Admindashboard />} />
// //         <Route path="/admin/users" element={<Usermanagement />} />
// //         <Route path="/admin/transactions" element={<Admintransactions />} /> */}
// //       </Routes>
// //     </Router>
// //   );

// // }

// // export default App




// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./assets/styles/tailwind.css";

// // Layouts
// import Auth from "./layouts/auth.jsx"; // Import the Auth layout
// import Admin from "./layouts/admin.jsx" //Admin layout


// // Views
// import Login from "./pages/login.jsx";
// import Register from "./pages/register.jsx";
// import Admindashboard from "./pages/admin/admindashboard.jsx"
// import Admintransactions from "./pages/admin/admintransactions.jsx"
// import Users from "./pages/admin/usermanagement.jsx"
// import Userdashboard from "./pages/user/userdashboard";
// import Usertransactions from "./pages/user/usertransactions";
// import Profile from "./pages/user/profile";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Auth Layout */}
//         <Route path="/auth" element={<Auth />}>
//           <Route path="login" element={<Login />} /> {/* Nested route */}
//           <Route path="register" element={<Register />} /> {/* Nested route */}
//         </Route>

//         {/* Admin Routes */}
//         <Route path="/admin" element={<Admin />}>
//           <Route path="/dashboard" element={<Admindashboard />} />
//           <Route path="/transactions" element={<Admintransactions />} />
//           <Route path="/users" element={<Users />} />
//         </Route>

//         {/* user Routes */}
//           <Route path="/dashboard" element={<Userdashboard />} />
//           <Route path="/transactions" element={<Usertransactions />} />
//           <Route path="/users" element={<Profile />} />


//         {/* Redirect all unknown paths to `/auth/login` */}
//         <Route path="*" element={<Navigate to="/auth/login" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

// Layouts
import Auth from "./layouts/auth.jsx";
import Admin from "./layouts/admin.jsx";
import User from "./layouts/user.jsx";
// Views
import Login from "./pages/login.jsx";
import Register from "./pages/register.jsx";
import Admindashboard from "./pages/admin/admindashboard.jsx";
import Admintransactions from "./pages/admin/admintransactions.jsx";
import Users from "./pages/admin/usermanagement.jsx";
import Index from "../src/pages/index.jsx";
import Userdashboard from "./pages/user/userdashboard";
import Detection from "./pages/user/detection"
import Profile from "./pages/user/profile.jsx"
import Usertransactions from "./pages/user/usertransactions.jsx"
import Feedback from "./views/user/Feedback.jsx";
import AdminFeedback from "./views/admin/AdminFeedback.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Layout */}
        <Route path="/auth" element={<Auth />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Admindashboard />} />
          <Route path="transactions" element={<Admintransactions />} />
          <Route path="users" element={<Users />} />
          <Route path="feedback" element={<AdminFeedback />} />
        </Route>
        <Route path="/user" element={<User />}>
        <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Userdashboard />} />
          <Route path="detection" element={<Detection />} />
          <Route path="transactions" element={<Usertransactions />} />
          <Route path="profile" element={<Profile />} />
          <Route path="feedback" element={<Feedback />} />
        </Route>

        {/* Redirect all unknown paths */}
        <Route path="/*" element={<Index />} />
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
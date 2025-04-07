import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, LOGIN } from "../api/config";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";
import { ToastContainer, toast } from "react-toastify";
import { Slide } from "react-toastify";
import { overlayStyles, spinnerStyles } from "../components/style";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userID, setUserID] = useState("");

  // Admin credentials
  const ADMIN_EMAIL = "admin@gmail.com";
  const ADMIN_PASSWORD = "admin123";

  useEffect(() => {
    // Get UserID from localStorage
    const userId = localStorage.getItem("userId");
    const isAdmin = localStorage.getItem("isAdmin");

    if (userId) {
      console.log("UserID:", userId);
      setUserID(userId);

      // Redirect based on user type
      if (isAdmin === "true") {
        window.location.href = "/admin/dashboard"; // You can change this to your admin dashboard route
      } else {
        window.location.href = "/user/dashboard";
      }
    }
  }, []);

  const handleLogin = async () => {
    if (email === "" || password === "") {
      toast.error("Please fill all data", {
        duration: 1000,
      });
    }
    // Check for admin credentials
    else if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      // Set admin flag in localStorage
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("userId", "admin");
      localStorage.setItem("userName", "Administrator");

      toast.success("Admin Login Successful", {
        duration: 1000,
        onClose: () => {
          navigate("/admin/dashboard"); // You can change this to your admin dashboard route
        },
      });
    }
    // Regular user login
    else {
      setLoading(true);
      try {
        const response = await axios.post(
          `${BASE_URL}${LOGIN}`,
          null, // No request body needed
          {
            headers: {
              email: email,
              password: password,
            },
          }
        );

        if (response.status === 200) {
          console.log("hereeeee", response);
          const userData = response.data.data[0]; // Assuming data is in an array
          localStorage.setItem("userInfo", JSON.stringify(userData)); // Store user data in localStorage
          const userId = userData.UserID;
          const userName = userData.UserName;

          // Store UserID in localStorage
          localStorage.setItem("userId", userId);
          localStorage.setItem("userName", userName);
          localStorage.setItem("isAdmin", "false"); // Explicitly set as non-admin

          setEmail("");
          setPassword("");
          toast.success("Login Success", {
            duration: 1000,
            onClose: () => {
              navigate("/user/dashboard");
            },
          });
        } else {
          setLoading(false);
          toast.error("Invalid Credentials", {
            duration: 1000,
          });
        }
      } catch (error) {
        console.error("hereeee", error);
        toast.error(error.response?.data?.message || "Login failed", {
          autoClose: 1000,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />

      {loading && (
        <div style={overlayStyles}>
          <FadeLoader
            color={"#123abc"}
            loading={loading}
            cssOverride={spinnerStyles}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-10 py-10">
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                <small>Sign in with credentials</small>
              </div>
              <form>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                    />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Remember me
                    </span>
                  </label>
                </div>

                <div className="text-center mt-6">
                  <button
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleLogin}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6 relative">
            <div className="w-1/2">
              <a
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                className="text-blueGray-200"
              >
                <small>Forgot password?</small>
              </a>
            </div>
            <div className="w-1/2 text-right">
              <Link to="/auth/register" className="text-blueGray-200">
                <small>Create new account</small>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

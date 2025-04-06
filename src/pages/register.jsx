import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { BASE_URL, REGISTER } from "../api/config";
import axios from 'axios';
import FadeLoader from "react-spinners/FadeLoader";
import { ToastContainer, toast } from 'react-toastify';
import { Slide } from 'react-toastify';
import { overlayStyles, spinnerStyles } from "../components/style";

import { useNavigate } from 'react-router-dom';

export default function Register() {
    useEffect(() => {
      // Get UserID from localStorage
      const userId = localStorage.getItem('userId');
      
      if (userId) {
        console.log("UserID:", userId);
        window.location.href = '/user/dashboard';
        // Use userId for API calls or state management
      }
    }, []);


    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    const handleRegister = async () => {

      if(username === '' || email === '' || password === ''){
        toast.error("Please fill all data", {
          duration: 1000
        })
      } else {


        setLoading(true);
        try {
            const response = await axios.post(`${BASE_URL}${REGISTER}`, {
                userName: username,
                email: email,
                password: password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if(response.status === 200) {
                console.log("hereeeee", response)
                setEmail('')
                setUsername('')
                setPassword('')
                toast.success('Registration Success , Please Login', {
                  duration: 2000,
                  onClose: () => {
                    navigate('/login');
                  }
                });


            } else {
                setLoading(false)
                toast.error('Invalid Credentials', {
                    duration: 1000
                });
            }
            
        } catch (error) {
            console.error('hereeee',error);
            toast.error(error.response.data.message, {
                autoClose: 1000,
            });
        } finally {
            setLoading(false);
        }
      }
    };


  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Slide} // Corrected prop assignment
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
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                {/* <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                    //   src={require("assets/img/github.svg").default}
                    />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                    //   src={require("assets/img/google.svg").default}
                    />
                    Google
                  </button>
                </div> */}
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Sign up by filling details</small>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      onChange={e => setUsername(e.target.value)}
                    />
                  </div>

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
                      onChange={e => setEmail(e.target.value)}
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
                      onChange={e => setPassword(e.target.value)}
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
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleRegister}
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/login" className="text-blueGray-200">
                  <small>Already have an account ?</small>
                </Link>
              </div>
              </div>


          </div>
        </div>
      </div>
    </>
  );
}

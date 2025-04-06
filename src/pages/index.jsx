import React from "react";
import { Link } from "react-router-dom";
import IndexNavbar from "../components/auth_navbar.jsx";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                Blockchain Fraud Detection System
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Our advanced AI-powered system monitors blockchain transactions
                in real-time to detect and prevent fraudulent activities. Protect
                your assets with our cutting-edge detection algorithms and
                comprehensive analytics dashboard.
              </p>
              <div className="mt-12">
                <Link to="/auth/login">
                  <a className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                    Get Started
                  </a>
                </Link>
                <a
                  href="#features"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src="https://media-hosting.imagekit.io/f2e653fa760841ea/index.png?Expires=1837849395&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wlGqTM5Cc508IFx2w0IW8lVEg5aOnjxKV-tBC8GAjMcwt~ju2d6VsMgitZLVnrXoMZIIAgoh~qlViwx5GrOm6QGPwqGL47I0sc10KQRtzkHJ3IRi9nhonHOvMntX-5ZVon6xvVz2Gb7mXJk1g~Dnh9qjJyPHSCysyt7UH9RFBSpmwM0dE243Tkr4TaKBI7tYrh5O5h319F3DtZl41kT~W91tJzxfrpNbQ9kPH6KAmqSl2-A4jDqt3IgMmkqpr0MGekX3reszlS~kUem5BvsqNl3Ye9qJnvt5lXTn-ICJjRaP92OgGMhEZo2-8vhHmQqGlAD~8Q0UCLfhGH-kZpE2qw__"
          alt="Blockchain visualization"
        />
      </section>

      <section id="features" className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20">
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="Fraud detection"
                  src="https://media-hosting.imagekit.io/e70330a03af147dd/blockchain.jpg?Expires=1837849268&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OEScrorO78tbCaoS3GlYbnrHKKJ2N2pEj6AbLbfNdQgYTQtLVI1dRTJimNGkG9f~gYOSt0MkRtH09UpyPqzw867PoOgGiRzM7Z8olnRMx8Q0S-HWQC0q7IUGcfYAWRtXFgohexscU8gGJBZN1FVZA04FK8t7Y3zb~WeOtjzS4fsqhIqjhAoLIn1ZxnmongABbqU1I5va4fKVRK3rgXRc~MYFTOQpqdi-yzTIKwH26oV6KRqVrpo0gxD0kzckIljGxt8x1wFM9CQ76MQClitTo0Ujpud3RkcRwHfqcfZq4Gr2yGtYNtmENdlWuy04tet9v91NynWbx8JEOwnKiDXJfA__"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Real-time Transaction Monitoring
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Our system analyzes every transaction across multiple blockchains
                    to identify suspicious patterns and potential fraud attempts
                    before they cause harm.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Fraud Prevention
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Advanced algorithms detect and prevent common blockchain
                        fraud patterns including wash trading and pump-and-dump schemes.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Risk Scoring
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Each transaction receives a risk score based on multiple
                        factors including amount, frequency, and counterparty history.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-bell"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Alerts</h6>
                      <p className="mb-4 text-blueGray-500">
                        Instant notifications when suspicious activity is detected,
                        with customizable alert thresholds.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Reporting
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Comprehensive reports for compliance and audit purposes,
                        with export to multiple formats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-shield-alt text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Fraud Detection Features
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Our system identifies multiple types of blockchain fraud with
                high accuracy using machine learning and pattern recognition.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Phishing Scams
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Wash Trading
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Pump & Dump
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Rug Pulls
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Smart Contract Exploits
                </span>
              </div>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="Dashboard preview"
                  src="assets/img/dashboard-preview.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="Transaction analysis"
                  src="assets/img/transaction-analysis.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="Alert notification"
                  src="assets/img/alert-notification.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <Link to="/auth/login">
                    <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-lightBlue-600">
                        <i className="fas fa-user"></i>
                      </div>
                      <p className="text-lg text-white mt-4 font-semibold">
                        User Dashboard
                      </p>
                    </div>
                  </Link>
                  <Link to="/admin/dashboard">
                    <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-blueGray-800">
                        <i className="fas fa-lock"></i>
                      </div>
                      <p className="text-lg text-white mt-4 font-semibold">
                        Admin Portal
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <Link to="/transactions">
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-emerald-600">
                        <i className="fas fa-exchange-alt"></i>
                      </div>
                      <p className="text-lg text-white mt-4 font-semibold">
                        Transaction Explorer
                      </p>
                    </div>
                  </Link>
                  <Link to="/alerts">
                    <div className="bg-red-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <div className="text-white p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full bg-red-600">
                        <i className="fas fa-exclamation-triangle"></i>
                      </div>
                      <p className="text-lg text-white mt-4 font-semibold">
                        Fraud Alerts
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                How It Works
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Our system connects to multiple blockchain networks, analyzes
                transaction patterns in real-time, and applies machine learning
                models to detect anomalies.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Data Collection
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Pattern Analysis
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Risk Scoring
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Alert Generation
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-lock text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Security First</h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  We prioritize security at every level of our application,
                  from encrypted data storage to secure API connections with
                  blockchain nodes.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          End-to-end encryption
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-shield-alt"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Multi-factor authentication
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-server"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          Secure cloud infrastructure
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="Security illustration"
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="assets/img/security-illustration.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4 -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center text-white">
                    Dashboard
                  </h5>
                  <Link to="/dashboard">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Dashboard preview"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="assets/img/dashboard-preview.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center text-white">
                    Transaction Analysis
                  </h5>
                  <Link to="/transactions">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Transaction analysis preview"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="assets/img/transaction-analysis-preview.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center text-white">
                    Alert Management
                  </h5>
                  <Link to="/alerts">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="Alert management preview"
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="assets/img/alert-management-preview.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-project-diagram text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Supported Blockchains
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Our system currently monitors transactions on Ethereum, Binance
                Smart Chain, Polygon, and other major EVM-compatible networks,
                with more chains being added regularly.
              </p>
              <div className="mt-12">
                <Link to="/auth/register">
                  <a className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                    Start Monitoring
                  </a>
                </Link>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-ethereum text-blueGray-300 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
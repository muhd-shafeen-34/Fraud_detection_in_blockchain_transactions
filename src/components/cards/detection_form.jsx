import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BASE_URL, POST_TRANS } from "../../api/config";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";
import { ToastContainer, toast } from "react-toastify";
import { Slide } from "react-toastify";
import { overlayStyles, spinnerStyles } from "../style";
import { useNavigate } from "react-router-dom";

export default function TransactionForm({ color }) {
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [fraudDetectionResult, setFraudDetectionResult] = useState("");

  useEffect(() => {
    // Get UserID from localStorage
    const userId = localStorage.getItem("userId");

    if (userId) {
      console.log("UserID:", userId);
      setUser(userId);
    } else {
      // Redirect if not logged in
      window.location.href = "/auth/login";
    }
  }, []);

  const [formData, setFormData] = useState({
    userID: parseInt(localStorage.getItem("userId")) || 0,
    senderAddress: "",
    receiverAddress: "",
    amount: 0,
    transactionHash: "",
    status: "",
    blockNumber: 0,
    gasFeeGwei: 0,
    confirmations: 0,
    totalConfirmations: 12,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Convert these fields to numbers
    const numericFields = [
      "amount",
      "blockNumber",
      "gasFeeGwei",
      "confirmations",
    ];

    setFormData((prev) => ({
      ...prev,
      [name]: numericFields.includes(name) ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const currentTime = new Date().toISOString();

    try {
      // Format dates to match API format
      const payload = {
        ...formData,
        transactionID: 1589728,
        timestamp: currentTime,
        createdAt: currentTime,
        updatedAt: currentTime,
      };

      console.log("Submitting transaction", payload);

      // Submit transaction
      const response = await axios.post(`${BASE_URL}${POST_TRANS}`, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Mock fraud detection response - replace this with your actual API call
      // const fraudDetectionResponse = await axios.post('YOUR_FRAUD_DETECTION_API', payload);

      // Simulating fraud detection API response
      const fraudDetectionResponse = {
        data: {
          isSucess: true,
          message: "Success",
          data: {
            _classification: "Legitimate",
          },
        },
      };

      if (response.status === 200) {
        if (
          fraudDetectionResponse.data.isSucess &&
          fraudDetectionResponse.data.data._classification
        ) {
          setFraudDetectionResult(
            fraudDetectionResponse.data.data._classification
          );
          setShowModal(true);
        }

        toast.success("Transaction submitted successfully!");
      }
      window.location.reload();
    } catch (error) {
      console.error("Error submitting transaction:", error);
      toast.error("Failed to submit transaction");
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
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

      {/* Fraud Detection Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
          <div
            className={`relative px-8 py-6 rounded-lg shadow-lg max-w-md w-full ${
              color === "light" ? "bg-white" : "bg-lightBlue-900"
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 rounded-full bg-green-100">
                <svg
                  className="w-12 h-12 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${
                  color === "light" ? "text-blueGray-700" : "text-white"
                }`}
              >
                Fraud Detection Result
              </h3>
              <p
                className={`text-2xl font-bold mb-6 ${
                  color === "light" ? "text-green-600" : "text-green-400"
                }`}
              >
                {fraudDetectionResult}
              </p>
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-lightBlue-500 text-white font-medium text-sm rounded-md hover:bg-lightBlue-600 transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                New Blockchain Transaction
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full p-6">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Sender Address */}
              <div className="col-span-1">
                <label
                  className={
                    "block text-sm font-medium mb-2 " +
                    (color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  Sender Address
                </label>
                <input
                  type="text"
                  name="senderAddress"
                  value={formData.senderAddress}
                  onChange={handleChange}
                  className={
                    "w-full px-3 py-2 text-sm rounded-md border " +
                    (color === "light"
                      ? "border-blueGray-300 bg-white text-blueGray-700"
                      : "border-lightBlue-700 bg-lightBlue-800 text-white")
                  }
                  placeholder="0x..."
                />
              </div>

              {/* Receiver Address */}
              <div className="col-span-1">
                <label
                  className={
                    "block text-sm font-medium mb-2 " +
                    (color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  Receiver Address
                </label>
                <input
                  type="text"
                  name="receiverAddress"
                  value={formData.receiverAddress}
                  onChange={handleChange}
                  className={
                    "w-full px-3 py-2 text-sm rounded-md border " +
                    (color === "light"
                      ? "border-blueGray-300 bg-white text-blueGray-700"
                      : "border-lightBlue-700 bg-lightBlue-800 text-white")
                  }
                  placeholder="0x..."
                />
              </div>

              {/* Amount */}
              <div className="col-span-1">
                <label
                  className={
                    "block text-sm font-medium mb-2 " +
                    (color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  Amount
                </label>
                <div className="relative">
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className={
                      "w-full px-3 py-2 text-sm rounded-md border " +
                      (color === "light"
                        ? "border-blueGray-300 bg-white text-blueGray-700"
                        : "border-lightBlue-700 bg-lightBlue-800 text-white")
                    }
                    placeholder="0.00"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span
                      className={
                        "text-sm " +
                        (color === "light"
                          ? "text-blueGray-500"
                          : "text-lightBlue-300")
                      }
                    >
                      ETH
                    </span>
                  </div>
                </div>
              </div>

              {/* Transaction Hash */}
              <div className="col-span-1">
                <label
                  className={
                    "block text-sm font-medium mb-2 " +
                    (color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  Transaction Hash
                </label>
                <input
                  type="text"
                  name="transactionHash"
                  value={formData.transactionHash}
                  onChange={handleChange}
                  className={
                    "w-full px-3 py-2 text-sm rounded-md border " +
                    (color === "light"
                      ? "border-blueGray-300 bg-white text-blueGray-700"
                      : "border-lightBlue-700 bg-lightBlue-800 text-white")
                  }
                  placeholder="0x..."
                />
              </div>

              {/* Timestamp */}
              <div className="col-span-1">
                <label
                  className={
                    "block text-sm font-medium mb-2 " +
                    (color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  Timestamp
                </label>
                <input
                  type="datetime-local"
                  className={
                    "w-full px-3 py-2 text-sm rounded-md border " +
                    (color === "light"
                      ? "border-blueGray-300 bg-white text-blueGray-700"
                      : "border-lightBlue-700 bg-lightBlue-800 text-white")
                  }
                />
              </div>

              {/* Status */}
              <div className="col-span-1">
                <label
                  className={
                    "block text-sm font-medium mb-2 " +
                    (color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className={
                    "w-full px-3 py-2 text-sm rounded-md border " +
                    (color === "light"
                      ? "border-blueGray-300 bg-white text-blueGray-700"
                      : "border-lightBlue-700 bg-lightBlue-800 text-white")
                  }
                >
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="failed">Failed</option>
                </select>
              </div>

              {/* Gas Fee */}
              <div className="col-span-1">
                <label
                  className={
                    "block text-sm font-medium mb-2 " +
                    (color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  Gas Fee (Gwei)
                </label>
                <input
                  type="number"
                  name="gasFeeGwei"
                  value={formData.gasFeeGwei}
                  onChange={handleChange}
                  className={
                    "w-full px-3 py-2 text-sm rounded-md border " +
                    (color === "light"
                      ? "border-blueGray-300 bg-white text-blueGray-700"
                      : "border-lightBlue-700 bg-lightBlue-800 text-white")
                  }
                  placeholder="20"
                />
              </div>

              {/* Block Number */}
              <div className="col-span-1">
                <label
                  className={
                    "block text-sm font-medium mb-2 " +
                    (color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  Block Number
                </label>
                <input
                  type="number"
                  name="blockNumber"
                  value={formData.blockNumber}
                  onChange={handleChange}
                  className={
                    "w-full px-3 py-2 text-sm rounded-md border " +
                    (color === "light"
                      ? "border-blueGray-300 bg-white text-blueGray-700"
                      : "border-lightBlue-700 bg-lightBlue-800 text-white")
                  }
                  placeholder="12345678"
                />
              </div>

              {/* Confirmation Progress */}
              <div className="col-span-2">
                <label
                  className={
                    "block text-sm font-medium mb-2 " +
                    (color === "light" ? "text-blueGray-600" : "text-white")
                  }
                >
                  Confirmations
                </label>
                <div className="flex items-center gap-4">
                  {/* Current Value Display */}
                  <span className="text-sm w-12 text-center">
                    {formData.confirmations}/12
                  </span>

                  {/* Slider Input */}
                  <input
                    type="range"
                    name="confirmations"
                    min="0"
                    max="12"
                    value={formData.confirmations}
                    onChange={handleChange}
                    className="w-full h-2 bg-blueGray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-span-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={
                    "px-6 py-3 rounded-md font-medium text-sm " +
                    (color === "light"
                      ? "bg-lightBlue-500 text-white hover:bg-lightBlue-600"
                      : "bg-lightBlue-600 text-white hover:bg-lightBlue-700") +
                    " transition duration-300"
                  }
                >
                  Submit Transaction
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

TransactionForm.defaultProps = {
  color: "light",
};

TransactionForm.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

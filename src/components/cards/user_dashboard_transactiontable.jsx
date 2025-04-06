import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { BASE_URL, GET_TRANS } from "../../api/config";
import FadeLoader from "react-spinners/FadeLoader";
import { toast } from "react-toastify";
import { overlayStyles, spinnerStyles } from "../../components/style";

// components
import TableDropdown from "./usertabledropdown.jsx";

export default function CardTable({ color }) {
  const [loading, setLoading] = useState(false);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}${GET_TRANS}`, {
        headers: {
          userID: localStorage.getItem("userId"),
        },
      });

      if (response.data.isSucess && response.data.data.itemList) {
        setTransactions(response.data.data.itemList);
        console.log("Transaction data:", response.data.data.itemList);
      } else {
        console.error("Invalid response format or no transactions found");
      }
    } catch (error) {
      console.error("Error fetching transactions:", error);
      toast.error("Failed to fetch transactions");
    } finally {
      setLoading(false);
    }
  };

  // Function to get status color based on transaction status
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "text-emerald-500";
      case "pending":
        return "text-orange-500";
      case "delayed":
        return "text-red-500";
      default:
        return "text-teal-500";
    }
  };

  // Function to calculate confirmation percentage
  const getConfirmationPercentage = (confirmations, totalConfirmations) => {
    if (!totalConfirmations) return 0;
    const percentage = (confirmations / totalConfirmations) * 100;
    return Math.min(100, percentage); // Ensure it doesn't exceed 100%
  };

  // Function to get progress bar color based on percentage
  const getProgressBarColor = (percentage) => {
    if (percentage < 50) return "bg-red";
    if (percentage < 75) return "bg-orange";
    if (percentage < 100) return "bg-teal";
    return "bg-emerald";
  };

  // Format timestamp to readable date/time
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  // Format amount with proper currency symbol
  const formatAmount = (amount) => {
    if (amount === undefined || amount === null) return "";
    return `$${amount.toLocaleString()} USD`;
  };

  return (
    <>
      {loading && (
        <div style={overlayStyles}>
          <FadeLoader color="#ffffff" css={spinnerStyles} />
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
                List of transactions
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Transaction ID
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Amount
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Status
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Addresses
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Confirmation
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction) => (
                  <tr key={transaction.TransactionID}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                      <div className="h-12 w-12 bg-white rounded-full border flex items-center justify-center">
                        <i className="fas fa-exchange-alt text-blueGray-600"></i>
                      </div>{" "}
                      <span
                        className={
                          "ml-3 font-bold " +
                          (color === "light"
                            ? "text-blueGray-600"
                            : "text-white")
                        }
                      >
                        {transaction.TransactionID}
                        <div className="text-xs text-blueGray-400">
                          {formatTimestamp(transaction.Timestamp)}
                        </div>
                      </span>
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {formatAmount(transaction.Amount)}
                      <div className="text-xs text-blueGray-400">
                        Gas: {transaction.GasFeeGwei} Gwei
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i
                        className={`fas fa-circle ${getStatusColor(
                          transaction.Status
                        )} mr-2`}
                      ></i>{" "}
                      {transaction.Status}
                      <div className="text-xs text-blueGray-400">
                        {transaction.Classification}
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div>
                        <div className="flex items-center mb-1">
                          <i className="fas fa-arrow-up text-emerald-500 mr-2"></i>{" "}
                          From: {transaction.SenderAddress}
                        </div>
                        <div className="flex items-center">
                          <i className="fas fa-arrow-down text-red-500 mr-2"></i>{" "}
                          To: {transaction.ReceiverAddress}
                        </div>
                      </div>
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div className="flex items-center">
                        <span className="mr-2">
                          {transaction.Confirmations}/
                          {transaction.TotalConfirmations}
                        </span>
                        <div className="relative w-full">
                          <div
                            className={`overflow-hidden h-2 text-xs flex rounded bg-${getProgressBarColor(
                              getConfirmationPercentage(
                                transaction.Confirmations,
                                transaction.TotalConfirmations
                              )
                            )}-200`}
                          >
                            <div
                              style={{
                                width: `${getConfirmationPercentage(
                                  transaction.Confirmations,
                                  transaction.TotalConfirmations
                                )}%`,
                              }}
                              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${getProgressBarColor(
                                getConfirmationPercentage(
                                  transaction.Confirmations,
                                  transaction.TotalConfirmations
                                )
                              )}-500`}
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="text-xs text-blueGray-400">
                        Block #{transaction.BlockNumber}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
                  >
                    {loading
                      ? "Loading transactions..."
                      : "No transactions found"}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

import React from "react";
import PropTypes from "prop-types";

export default function TransactionForm({ color }) {
  return (
    <>
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
                <label className={
                  "block text-sm font-medium mb-2 " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }>
                  Sender Address
                </label>
                <input
                  type="text"
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
                <label className={
                  "block text-sm font-medium mb-2 " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }>
                  Receiver Address
                </label>
                <input
                  type="text"
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
                <label className={
                  "block text-sm font-medium mb-2 " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }>
                  Amount
                </label>
                <div className="relative">
                  <input
                    type="number"
                    className={
                      "w-full px-3 py-2 text-sm rounded-md border " +
                      (color === "light" 
                        ? "border-blueGray-300 bg-white text-blueGray-700" 
                        : "border-lightBlue-700 bg-lightBlue-800 text-white")
                    }
                    placeholder="0.00"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className={
                      "text-sm " +
                      (color === "light" ? "text-blueGray-500" : "text-lightBlue-300")
                    }>
                      ETH
                    </span>
                  </div>
                </div>
              </div>

              {/* Transaction Hash */}
              <div className="col-span-1">
                <label className={
                  "block text-sm font-medium mb-2 " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }>
                  Transaction Hash
                </label>
                <input
                  type="text"
                  className={
                    "w-full px-3 py-2 text-sm rounded-md border " +
                    (color === "light" 
                      ? "border-blueGray-300 bg-white text-blueGray-700" 
                      : "border-lightBlue-700 bg-lightBlue-800 text-white")
                  }
                  placeholder="0x..."
                  readOnly
                />
              </div>

              {/* Timestamp */}
              <div className="col-span-1">
                <label className={
                  "block text-sm font-medium mb-2 " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }>
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
                <label className={
                  "block text-sm font-medium mb-2 " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }>
                  Status
                </label>
                <select
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
                <label className={
                  "block text-sm font-medium mb-2 " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }>
                  Gas Fee (Gwei)
                </label>
                <input
                  type="number"
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
                <label className={
                  "block text-sm font-medium mb-2 " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }>
                  Block Number
                </label>
                <input
                  type="number"
                  className={
                    "w-full px-3 py-2 text-sm rounded-md border " +
                    (color === "light" 
                      ? "border-blueGray-300 bg-white text-blueGray-700" 
                      : "border-lightBlue-700 bg-lightBlue-800 text-white")
                  }
                  placeholder="12345678"
                  readOnly
                />
              </div>

              {/* Confirmation Progress */}
              <div className="col-span-2">
                <label className={
                  "block text-sm font-medium mb-2 " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }>
                  Confirmations
                </label>
                <div className="flex items-center">
                  <span className="mr-2 text-sm">6/12</span>
                  <div className="relative w-full">
                    <div className="overflow-hidden h-2 text-xs flex rounded bg-blueGray-200">
                      <div
                        style={{ width: "50%" }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-span-2 flex justify-end">
                <button
                  type="submit"
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
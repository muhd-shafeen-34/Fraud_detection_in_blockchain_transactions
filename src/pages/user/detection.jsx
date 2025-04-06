import { useState } from "react";
// import Navbar from "../../components/navbar";
// import Sidebar from "../../components/sidebar";


// components

import CardTable from "../../components/cards/detection_form.jsx";

function Detection() {
  const [transaction, setTransaction] = useState({
    sender: "",
    receiver: "",
    amount: "",
    timestamp: "",
  });

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transaction Submitted:", transaction);
    // TODO: Send transaction data to Django backend
  };

  return (
    // <div className="flex">
    //   <Sidebar />
    //   <div className="flex-1">
    //     <Navbar />
    //     <div className="p-6">
    //       <h1 className="text-2xl font-bold">Enter Transaction Details</h1>
    //       <form onSubmit={handleSubmit} className="mt-6 space-y-4">
    //         <input
    //           type="text"
    //           name="sender"
    //           placeholder="Sender Address"
    //           value={transaction.sender}
    //           onChange={handleChange}
    //           className="w-full p-2 border rounded"
    //           required
    //         />
    //         <input
    //           type="text"
    //           name="receiver"
    //           placeholder="Receiver Address"
    //           value={transaction.receiver}
    //           onChange={handleChange}
    //           className="w-full p-2 border rounded"
    //           required
    //         />
    //         <input
    //           type="number"
    //           name="amount"
    //           placeholder="Amount"
    //           value={transaction.amount}
    //           onChange={handleChange}
    //           className="w-full p-2 border rounded"
    //           required
    //         />
    //         <input
    //           type="datetime-local"
    //           name="timestamp"
    //           value={transaction.timestamp}
    //           onChange={handleChange}
    //           className="w-full p-2 border rounded"
    //           required
    //         />
    //         <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
    //           Submit Transaction
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>



    <>
          <div className="flex flex-wrap mt-4">
            <div className="w-full mb-12 px-4">
              <CardTable />
            </div>
          </div>
        </>


  );
}

export default Detection;

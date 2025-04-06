import React from "react";

// components

import CardTable from "../../components/cards/user_dashboard_transactiontable.jsx";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
      </div>
    </>
  );
}

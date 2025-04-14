import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL, GET_TRANS } from "../api/config";
import axios from "axios";
import FadeLoader from "react-spinners/FadeLoader";
import { ToastContainer, toast } from "react-toastify";
import { Slide } from "react-toastify";
import { overlayStyles, spinnerStyles } from "../components/style";

// components
import CardStats from "../components/admincards.jsx";

export default function HeaderStats() {
  const [loading, setLoading] = useState(false);
  const [dashboardData, setDashboardData] = useState({
    TotalTransactions: 0,
    MonthlyGrowthPercent: 0,
    NewUsersThisWeek: 0,
    SalesToday: 0,
    SalesChangePercent: 0,
    ConfirmationRate: 0,
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);

    try {
      const userId = Number(localStorage.getItem("userId"));

      const response = await axios.get(`${BASE_URL}${GET_TRANS}`, {
        headers: {
          userID: userId,
        },
      });

      if (response.status === 200) {
        if (
          response.data.isSucess &&
          response.data.data.dashBoard &&
          response.data.data.dashBoard.length > 0
        ) {
          setDashboardData(response.data.data.dashBoard[0]);
          console.log("Dashboard data:", response.data.data.dashBoard[0]);
        }
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      toast.error("Failed to fetch dashboard data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="TRANSACTIONS"
                  statTitle={dashboardData.TotalTransactions}
                  statArrow={
                    dashboardData.MonthlyGrowthPercent >= 0 ? "up" : "down"
                  }
                  statPercent={Math.abs(
                    dashboardData.MonthlyGrowthPercent
                  ).toFixed(2)}
                  statPercentColor={
                    dashboardData.MonthlyGrowthPercent >= 0
                      ? "text-emerald-500"
                      : "text-red-500"
                  }
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Legitmate "
                  statTitle={dashboardData.NewUsersThisWeek}
                  statArrow="up"
                  statPercent="N/A"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Fraud"
                  statTitle={dashboardData.FraudTransaction}
                  statArrow={
                    dashboardData.SalesChangePercent >= 0 ? "up" : "down"
                  }
                  statPercent={Math.abs(
                    dashboardData.SalesChangePercent
                  ).toFixed(2)}
                  statPercentColor={
                    dashboardData.SalesChangePercent >= 0
                      ? "text-emerald-500"
                      : "text-red-500"
                  }
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="CONFIRMATION RATE"
                  statTitle={`${dashboardData.ConfirmationRate}`}
                  statArrow="up"
                  statPercent="N/A"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Current rate"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div style={overlayStyles}>
          <FadeLoader color="#ffffff" css={spinnerStyles} />
        </div>
      )}

      <ToastContainer
        position="top-right"
        transition={Slide}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

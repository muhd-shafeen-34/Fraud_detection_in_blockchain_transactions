import React, { useState, useEffect } from "react";
import { BASE_URL, SUBMIT_FEEDBACK, GET_FEEDBACKS } from "../../api/config";

export default function Feedback() {
  const [feedback, setFeedback] = useState({
    feedbackText: ""
  });
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}${GET_FEEDBACKS}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'userID': userInfo.UserID
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch feedbacks');
      }

      const result = await response.json();
      if (result.isSucess) {
        setFeedbacks(result.data);
      } else {
        throw new Error(result.message || 'Failed to fetch feedbacks');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'responded':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}${SUBMIT_FEEDBACK}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID: userInfo.UserID,
          feedbackText: feedback.feedbackText
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit feedback');
      }

      alert("Thank you for your feedback!");
      setFeedback({ feedbackText: "" });
      fetchFeedbacks(); // Refresh the feedback list
    } catch (err) {
      setError(err.message);
      alert("Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Feedback</h6>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="feedbackText"
                  >
                    Your Feedback
                  </label>
                  <textarea
                    id="feedbackText"
                    rows="4"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Share your thoughts with us..."
                    value={feedback.feedbackText}
                    onChange={(e) => setFeedback({ feedbackText: e.target.value })}
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <button
                className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                type="submit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Feedback"}
              </button>
            </div>
          </form>

          {/* Display Feedbacks */}
          <div className="mt-8">
            <h6 className="text-blueGray-700 text-xl font-bold mb-4">Previous Feedbacks</h6>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            {loading ? (
              <div className="text-center">Loading...</div>
            ) : feedbacks.length > 0 ? (
              <div className="space-y-4">
                {feedbacks.map((item) => (
                  <div key={item.FeedbackID} className="bg-white p-6 rounded-lg shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-blueGray-600 text-lg font-semibold mb-2">
                          Feedback #{item.FeedbackID}
                        </p>
                        <p className="text-blueGray-500 text-sm">
                          Submitted on {formatDate(item.SubmittedDate)}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(item.Status)}`}>
                        {item.Status}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-blueGray-700">{item.FeedbackText}</p>
                    </div>

                    {item.ResponseText && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm font-semibold text-blueGray-600 mb-2">Response:</p>
                        <p className="text-blueGray-700">{item.ResponseText}</p>
                        <p className="text-blueGray-500 text-sm mt-2">
                          Responded on {formatDate(item.RespondedDate)}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-blueGray-500">No feedbacks yet</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 
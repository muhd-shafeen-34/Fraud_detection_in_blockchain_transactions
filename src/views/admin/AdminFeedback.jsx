import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../../api/config";

export default function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [responseText, setResponseText] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const response = await axios.get(`${BASE_URL}api/FraudTransaction/get-pending-feedbacks`);
      if (response.data.isSucess) {
        setFeedbacks(response.data.data || []);
      }
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  };

  const handleRespond = async (feedbackId) => {
    try {
      const response = await axios.post(`${BASE_URL}api/FraudTransaction/respond-feedback`, {
        feedbackID: feedbackId,
        responseText: responseText
      });
      
      if (response.data.isSucess) {
        setMessage(response.data.message || "Response submitted successfully");
        // Clear response text and refresh feedbacks
        setResponseText("");
        setSelectedFeedback(null);
        fetchFeedbacks();
        
        // Clear success message after 3 seconds
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      console.error('Error responding to feedback:', error);
      setMessage("Error submitting response. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen bg-blueGray-100 p-4">
      <div className="w-full h-full bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Pending Feedbacks</h2>
        
        {message && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
            {message}
          </div>
        )}
        
        <div className="grid grid-cols-1 gap-4">
          {feedbacks?.map((feedback) => (
            <div key={feedback.FeedbackID} className="border rounded-lg p-4 bg-gray-50">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg">Feedback #{feedback.FeedbackID}</h3>
                  <p className="text-gray-600 mt-2">{feedback.FeedbackText}</p>
                  <p className="text-sm text-gray-500 mt-1">User ID: {feedback.UserID}</p>
                  <p className="text-sm text-gray-500">Status: {feedback.Status}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(feedback.SubmittedDate).toLocaleDateString()}
                </span>
              </div>

              {feedback.ResponseText && (
                <div className="mt-2 p-2 bg-blue-50 rounded">
                  <p className="text-sm font-semibold">Response:</p>
                  <p className="text-sm text-gray-700">{feedback.ResponseText}</p>
                  {feedback.RespondedDate && (
                    <p className="text-xs text-gray-500 mt-1">
                      Responded on: {new Date(feedback.RespondedDate).toLocaleDateString()}
                    </p>
                  )}
                </div>
              )}

              {selectedFeedback === feedback.FeedbackID ? (
                <div className="mt-4">
                  <textarea
                    className="w-full p-2 border rounded-lg"
                    rows="3"
                    placeholder="Enter your response..."
                    value={responseText}
                    onChange={(e) => setResponseText(e.target.value)}
                  />
                  <div className="flex justify-end gap-2 mt-2">
                    <button
                      className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                      onClick={() => {
                        setSelectedFeedback(null);
                        setResponseText("");
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      onClick={() => handleRespond(feedback.FeedbackID)}
                    >
                      Submit Response
                    </button>
                  </div>
                </div>
              ) : !feedback.ResponseText && (
                <button
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => setSelectedFeedback(feedback.FeedbackID)}
                >
                  Respond
                </button>
              )}
            </div>
          ))}

          {(!feedbacks || feedbacks.length === 0) && (
            <div className="text-center py-8 text-gray-500">
              No pending feedbacks at the moment
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 
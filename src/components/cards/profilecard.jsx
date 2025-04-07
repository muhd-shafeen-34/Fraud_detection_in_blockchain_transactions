import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api/config";

// Profile Card Component
export function ProfileCard({ color, userData, onEditClick }) {
  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg " +
        (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
      }
    >
      {/* Profile Header with Background */}
      <div className="relative h-48 bg-lightBlue-600 rounded-t-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lightBlue-500 to-lightBlue-700 opacity-75"></div>
      </div>

      {/* Profile Content */}
      <div className="px-6">
        {/* Avatar and Stats */}
        <div className="flex flex-wrap justify-center -mt-20">
          <div className="w-full px-4 flex justify-center">
            <div className="relative">
              <img
                alt="Profile"
                src={userData.ImageUrl || "assets/img/team-2-800x800.jpg"}
                className={
                  "shadow-xl rounded-full h-32 w-32 align-middle border-none border-4 " +
                  (color === "light" ? "border-white" : "border-lightBlue-900")
                }
              />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="text-center mt-8">
          <h3
            className={
              "text-2xl font-semibold leading-normal mb-2 " +
              (color === "light" ? "text-blueGray-700" : "text-white")
            }
          >
            {userData.UserName || ""}
          </h3>
          <div
            className={
              "text-sm leading-normal mt-0 mb-2 font-bold " +
              (color === "light" ? "text-blueGray-400" : "text-lightBlue-300")
            }
          >
            <i
              className={
                "fas fa-envelope mr-2 text-lg " +
                (color === "light" ? "text-blueGray-400" : "text-lightBlue-300")
              }
            ></i>
            {userData.Email || ""}
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-6 py-4 border-t border-blueGray-200 text-center">
          <button
            onClick={onEditClick}
            className={
              "bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 " +
              (color === "dark" ? "ring-2 ring-lightBlue-400" : "")
            }
          >
            Edit Profile Details
          </button>
        </div>
      </div>
    </div>
  );
}

// Edit Profile Form Component
export function EditProfileForm({ color, userData, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    UserName: userData.UserName || "",
    Email: userData.Email || "",
    location: userData.location || "",
    job: userData.job || "",
    education: userData.education || "",
    bio: userData.bio || "",
    ImageUrl: userData.ImageUrl || "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(userData.ImageUrl || "");
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async (file) => {
    if (!file) return null;

    setIsUploading(true);

    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append("file", file);

      const response = await fetch(
        "https://asasul-islam-cggqcsa8a9dtghbq.eastus-01.azurewebsites.net/api/8002/upload-image",
        {
          method: "POST",
          body: formDataWithImage,
        }
      );

      if (!response.ok) {
        throw new Error(`Image upload failed: ${response.statusText}`);
      }

      const data = await response.json();
      return data; // The API returns the URL as response
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      let updatedFormData = { ...formData };

      if (imageFile) {
        const imageData = await uploadImage(imageFile);
        if (imageData && imageData.url) {
          updatedFormData.ImageUrl = imageData.url;
        }
      }

      // Update user profile
      const response = await fetch(`${BASE_URL}api/FraudTransaction/put-user`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          userId: userData.UserID.toString(),
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        const updatedData = await response.json();
        onSave({
          ...userData,
          ...updatedFormData,
        });
      } else {
        console.error("Failed to update profile:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg " +
        (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
      }
    >
      {/* Form Header */}
      <div className="rounded-t-lg px-6 py-6 border-b border-blueGray-200">
        <h3
          className={
            "text-2xl font-semibold " +
            (color === "light" ? "text-blueGray-700" : "text-white")
          }
        >
          Edit Profile Details
        </h3>
      </div>

      {/* Form Content */}
      <div className="px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Picture */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-center">
            <img
              alt="Profile"
              src={previewUrl || "assets/img/team-2-800x800.jpg"}
              className={
                "shadow-xl rounded-full h-32 w-32 align-middle border-none border-4 mb-4 " +
                (color === "light" ? "border-white" : "border-lightBlue-900")
              }
            />
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="profile-image-upload"
                disabled={isUploading}
              />
              <label
                htmlFor="profile-image-upload"
                className={
                  "text-sm px-4 py-2 rounded cursor-pointer " +
                  (isUploading ? "opacity-50 cursor-not-allowed " : "") +
                  (color === "light"
                    ? "bg-blueGray-200 text-blueGray-700 hover:bg-blueGray-300"
                    : "bg-lightBlue-700 text-white hover:bg-lightBlue-600")
                }
              >
                {isUploading ? "Uploading..." : "Change Photo"}
              </label>
            </div>
          </div>

          {/* Form Fields */}
          <div className="col-span-1">
            <div className="mb-4">
              <label
                className={
                  "block text-sm font-medium mb-2 " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }
              >
                Username
              </label>
              <input
                type="text"
                name="UserName"
                value={formData.UserName}
                onChange={handleChange}
                className={
                  "w-full px-3 py-2 text-sm rounded-md border " +
                  (color === "light"
                    ? "border-blueGray-300 bg-white text-blueGray-700"
                    : "border-lightBlue-700 bg-lightBlue-800 text-white")
                }
              />
            </div>
          </div>

          <div className="col-span-1">
            <div className="mb-4">
              <label
                className={
                  "block text-sm font-medium mb-2 " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }
              >
                Email
              </label>
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                className={
                  "w-full px-3 py-2 text-sm rounded-md border " +
                  (color === "light"
                    ? "border-blueGray-300 bg-white text-blueGray-700"
                    : "border-lightBlue-700 bg-lightBlue-800 text-white")
                }
              />
            </div>
          </div>
        </div>

        {/* Form Actions */}
        <div className="mt-6 py-4 border-t border-blueGray-200 flex justify-end space-x-3">
          <button
            onClick={onCancel}
            disabled={isUploading}
            className={
              "px-6 py-2 rounded-md font-medium text-sm " +
              (isUploading ? "opacity-50 cursor-not-allowed " : "") +
              (color === "light"
                ? "bg-blueGray-200 text-blueGray-700 hover:bg-blueGray-300"
                : "bg-lightBlue-700 text-white hover:bg-lightBlue-600") +
              " transition duration-300"
            }
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isUploading}
            className={
              "px-6 py-2 rounded-md font-medium text-sm " +
              (isUploading ? "opacity-50 cursor-not-allowed " : "") +
              (color === "light"
                ? "bg-lightBlue-500 text-white hover:bg-lightBlue-600"
                : "bg-lightBlue-600 text-white hover:bg-lightBlue-700") +
              " transition duration-300"
            }
          >
            {isUploading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Profile Component with Edit Toggle
export default function Profile({ color }) {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    UserName: "",
    Email: "",
    UserID: "",
    ImageUrl: "",
    location: "",
    job: "",
    education: "",
    bio: "",
    friends: 0,
    photos: 0,
    comments: 0,
  });

  // Load user data from localStorage on component mount
  useEffect(() => {
    try {
      const userInfoString = localStorage.getItem("userInfo");
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        setUserData((prevData) => ({
          ...prevData,
          ...userInfo,
        }));
      }
    } catch (error) {
      console.error("Error loading user data from localStorage:", error);
    }
  }, []);

  const handleSave = (newData) => {
    setUserData(newData);
    setIsEditing(false);

    // Update localStorage with new user data
    try {
      const userInfoToSave = {
        UserName: newData.UserName,
        Email: newData.Email,
        ImageUrl: newData.ImageUrl,
        UserID: newData.UserID,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfoToSave));
    } catch (error) {
      console.error("Error saving user data to localStorage:", error);
    }
  };

  return (
    <>
      {isEditing ? (
        <EditProfileForm
          color={color}
          userData={userData}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <ProfileCard
          color={color}
          userData={userData}
          onEditClick={() => setIsEditing(true)}
        />
      )}
    </>
  );
}

Profile.defaultProps = {
  color: "light",
};

Profile.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

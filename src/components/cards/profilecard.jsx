// 



import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Profile Card Component
export function ProfileCard({ color, onEditClick }) {
  return (
    <div className={
      "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg " +
      (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
    }>
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
                src="assets/img/team-2-800x800.jpg"
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
          <h3 className={
            "text-2xl font-semibold leading-normal mb-2 " +
            (color === "light" ? "text-blueGray-700" : "text-white")
          }>
            Jenna Stones
          </h3>
          <div className={
            "text-sm leading-normal mt-0 mb-2 font-bold uppercase " +
            (color === "light" ? "text-blueGray-400" : "text-lightBlue-300")
          }>
            <i className={
              "fas fa-map-marker-alt mr-2 text-lg " +
              (color === "light" ? "text-blueGray-400" : "text-lightBlue-300")
            }></i>
            Los Angeles, California
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 py-4 border-t border-blueGray-200">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="p-3">
                <span className={
                  "text-xl font-bold block " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }>
                  22
                </span>
                <span className={
                  "text-sm " +
                  (color === "light" ? "text-blueGray-400" : "text-lightBlue-300")
                }>
                  Friends
                </span>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="p-3">
                <span className={
                  "text-xl font-bold block " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }>
                  10
                </span>
                <span className={
                  "text-sm " +
                  (color === "light" ? "text-blueGray-400" : "text-lightBlue-300")
                }>
                  Photos
                </span>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="p-3">
                <span className={
                  "text-xl font-bold block " +
                  (color === "light" ? "text-blueGray-600" : "text-white")
                }>
                  89
                </span>
                <span className={
                  "text-sm " +
                  (color === "light" ? "text-blueGray-400" : "text-lightBlue-300")
                }>
                  Comments
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Details */}
        <div className="mt-2 py-6 border-t border-blueGray-200">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-9/12 px-4">
              <p className={
                "mb-4 text-center " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }>
                <i className={
                  "fas fa-briefcase mr-2 " +
                  (color === "light" ? "text-blueGray-400" : "text-lightBlue-300")
                }></i>
                Solution Manager - Creative Tim Officer
              </p>
              <p className={
                "mb-4 text-center " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }>
                <i className={
                  "fas fa-university mr-2 " +
                  (color === "light" ? "text-blueGray-400" : "text-lightBlue-300")
                }></i>
                University of Computer Science
              </p>
              <p className={
                "mb-4 text-lg leading-relaxed " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }>
                An artist of considerable range, Jenna writes and records all of 
                her own music, giving it a warm, intimate feel with a solid groove.
              </p>
            </div>
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
export function EditProfileForm({ color, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: "Jenna Stones",
    location: "Los Angeles, California",
    job: "Solution Manager - Creative Tim Officer",
    education: "University of Computer Science",
    bio: "An artist of considerable range, Jenna writes and records all of her own music, giving it a warm, intimate feel with a solid groove."
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={
      "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg " +
      (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
    }>
      {/* Form Header */}
      <div className="rounded-t-lg px-6 py-6 border-b border-blueGray-200">
        <h3 className={
          "text-2xl font-semibold " +
          (color === "light" ? "text-blueGray-700" : "text-white")
        }>
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
              src="assets/img/team-2-800x800.jpg"
              className={
                "shadow-xl rounded-full h-32 w-32 align-middle border-none border-4 mb-4 " +
                (color === "light" ? "border-white" : "border-lightBlue-900")
              }
            />
            <button className={
              "text-sm px-4 py-2 rounded " +
              (color === "light" 
                ? "bg-blueGray-200 text-blueGray-700 hover:bg-blueGray-300" 
                : "bg-lightBlue-700 text-white hover:bg-lightBlue-600")
            }>
              Change Photo
            </button>
          </div>

          {/* Form Fields */}
          <div className="col-span-1">
            <div className="mb-4">
              <label className={
                "block text-sm font-medium mb-2 " +
                (color === "light" ? "text-blueGray-600" : "text-white")
              }>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
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
              <label className={
                "block text-sm font-medium mb-2 " +
                (color === "light" ? "text-blueGray-600" : "text-white")
              }>
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
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
              <label className={
                "block text-sm font-medium mb-2 " +
                (color === "light" ? "text-blueGray-600" : "text-white")
              }>
                Job Title
              </label>
              <input
                type="text"
                name="job"
                value={formData.job}
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
              <label className={
                "block text-sm font-medium mb-2 " +
                (color === "light" ? "text-blueGray-600" : "text-white")
              }>
                Education
              </label>
              <input
                type="text"
                name="education"
                value={formData.education}
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

          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <label className={
                "block text-sm font-medium mb-2 " +
                (color === "light" ? "text-blueGray-600" : "text-white")
              }>
                Bio
              </label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
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
            className={
              "px-6 py-2 rounded-md font-medium text-sm " +
              (color === "light"
                ? "bg-blueGray-200 text-blueGray-700 hover:bg-blueGray-300"
                : "bg-lightBlue-700 text-white hover:bg-lightBlue-600") +
              " transition duration-300"
            }
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(formData)}
            className={
              "px-6 py-2 rounded-md font-medium text-sm " +
              (color === "light"
                ? "bg-lightBlue-500 text-white hover:bg-lightBlue-600"
                : "bg-lightBlue-600 text-white hover:bg-lightBlue-700") +
              " transition duration-300"
            }
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Profile Component with Edit Toggle
export default function Profile({ color }) {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Jenna Stones",
    location: "Los Angeles, California",
    job: "Solution Manager - Creative Tim Officer",
    education: "University of Computer Science",
    bio: "An artist of considerable range, Jenna writes and records all of her own music, giving it a warm, intimate feel with a solid groove."
  });

  const handleSave = (newData) => {
    setProfileData(newData);
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditProfileForm 
          color={color}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <ProfileCard 
          color={color}
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
import React from "react";
import { createPopper } from "@popperjs/core";
import { BASE_URL } from "../../api/config";

const NotificationDropdown = ({ userId }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}api/FraudTransaction/delete-user`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            userId: userId, // Passing userId in the header
          },
        }
      );
      window.location.reload();
      if (response.ok) {
        console.log("User deleted successfully");
        // You may want to add a callback to refresh the user list or navigate elsewhere
        // onUserDeleted(); // Uncomment and implement if needed
      } else {
        console.error("Failed to delete user:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }

    // Close the dropdown after delete action
    closeDropdownPopover();
  };

  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <button
          className={
            "text-sm py-2 hover:bg-gray-100 font-medium px-4 block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default NotificationDropdown;

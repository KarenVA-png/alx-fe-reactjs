import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div
      className="
        bg-gray-100 sm:p-4 md:p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg 
        text-center transition-shadow duration-300 hover:shadow-xl
      "
    >
      <img
        src={user.avatar || "https://via.placeholder.com/150"}
        alt={user.name || "User"}
        className="
          rounded-full max-w-xs md:max-w-sm
          w-32 h-32 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto
          transform transition-transform duration-300 ease-in-out hover:scale-110
        "
      />
      <h1
        className="
          md:text-xl text-lg text-blue-800 my-4
          transition-colors duration-200 hover:text-blue-500
        "
      >
        {user.name || "John Doe"}
      </h1>
      <p className="text-gray-600 text-base">
        {user.bio ||
          "Developer at Example Co. Loves to write code and explore new technologies."}
      </p>
      <p className="text-gray-500 text-sm">
        {user.email || "no-email@example.com"}
      </p>
    </div>
  );
}

export default UserProfile;


import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      <img
        src={user.avatar || "https://via.placeholder.com/150"}
        alt={user.name || "User"}
        className="[ rounded-full max-w-xs" "md:max-w-sm w-36 h-36 mx-auto"
      />
      <h1 className="text-xl text-blue-800 my-4" "text-lg" "md:text-xl">{user.name || "John Doe"}</h1>
      <p className="text-gray-600 text-base">
        {user.bio ||
          "Developer at Example Co. Loves to write code and explore new technologies."}
      </p>
      <p className="text-gray-500 text-sm">{user.email || "no-email@example.com"}</p>
    </div>
  );
}

export default UserProfile;

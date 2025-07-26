// src/components/UserProfile.jsx
import { useContext } from 'react';
import UserContext from '../UserContext';
import UserInfo from './UserInfo';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {userData.name}</h2>
      <UserInfo />
    </div>
  );
}

export default UserProfile;

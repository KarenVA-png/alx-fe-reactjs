import { useContext } from 'react';
import UserContext from '../UserContext'; // use correct path
import UserInfo from './UserInfo';

function ProfilePage() {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>Welcome, {userData.name}</h2> {/* Just to prove context is used here */}
      <UserInfo />
    </div>
  );
}

export default ProfilePage;

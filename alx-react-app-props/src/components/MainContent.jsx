import { useContext } from 'react';
import UserContext from '../UserContext';

function MainContent() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default MainContent;

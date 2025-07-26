import ProfilePage from './components/ProfilePage';
import UserContext from './UserContext'; // <- double-check the path

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  console.log("Testing push");


  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

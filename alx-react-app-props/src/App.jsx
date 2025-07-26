import ProfilePage from './components/ProfilePage'; // ✅ correct

import UserContext from './UserContext'; // 💡 Import your new context

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

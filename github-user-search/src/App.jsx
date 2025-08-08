import { useState } from "react";
import { fetchUser } from "./services/api";
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";

function App() {
  const [user, setUser] = useState(null);

  const handleSearch = async (username) => {
    const userData = await fetchUser(username);
    setUser(userData);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      <UserProfile user={user} />
    </div>
  );
}

export default App;
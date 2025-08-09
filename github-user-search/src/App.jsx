import { useState } from "react";
import { fetchUser } from "./services/api";
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUser(null);

    try {
      const userData = await fetchUser(username);
      if (userData) {
        setUser(userData);
      } else {
        setError("Looks like we can’t find the user");
      }
    } catch (err) {
      setError("Looks like we can’t find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {user && <UserProfile user={user} />}
    </div>
  );
}

export default App;

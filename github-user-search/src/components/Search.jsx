import { useState } from "react";
import { fetchUserData, fetchAdvancedUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [userData, setUserData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() && !location.trim() && !minRepos.trim()) return;

    setLoading(true);
    setError(null);
    setUserData(null);
    setSearchResults([]);

    try {
      // If only username is provided → single user search
      if (username && !location && !minRepos) {
        const data = await fetchUserData(username);
        setUserData(data);
      } else {
        // Advanced search
        const data = await fetchAdvancedUserData(username, location, minRepos);
        setSearchResults(data.items || []);
      }
    } catch (err) {
      setError("Looks like we cant find the user"); // exact match
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="Enter GitHub username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          value={location}
          placeholder="Location..."
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          value={minRepos}
          placeholder="Minimum Repositories..."
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Show Single User Data */}
      {userData && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h2>{userData.name || userData.login}</h2>
          <p>
            <a href={userData.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </p>
        </div>
      )}

      {/* Show Advanced Search Results */}
      {searchResults.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          {searchResults.map((user) => (
            <div key={user.id} style={{ marginBottom: "10px" }}>
              <img
                src={user.avatar_url}
                alt={user.login}
                width="50"
                style={{ borderRadius: "50%" }}
              />
              <span style={{ marginLeft: "10px" }}>{user.login}</span>
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                style={{ marginLeft: "10px" }}
              >
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

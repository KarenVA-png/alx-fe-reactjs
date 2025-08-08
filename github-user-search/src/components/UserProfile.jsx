const UserProfile = ({ user }) => {
  if (!user) return <p>No user found. Try searching again!</p>;

  return (
    <div>
      <img src={user.avatar_url} alt={user.login} width="100" />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio || "No bio available."}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        Visit GitHub Profile
      </a>
    </div>
  );
};

export default UserProfile;
function UserProfile(props) {
  return (
    <div 
      className="user-profile"
      style={{
        border: '2px solid #e0e0e0',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px 0',
        backgroundColor: '#f8f9fa',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif'
      }}
    >
      <h2 style={{
        color: '#2c3e50',
        marginTop: '0',
        borderBottom: '1px solid #eee',
        paddingBottom: '10px',
        fontSize: '1.5rem'
      }}>
        {props.name}
      </h2>
      <p style={{
        margin: '8px 0',
        color: '#333',
        fontSize: '1rem'
      }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{
        margin: '8px 0',
        color: '#555',
        fontStyle: 'italic',
        lineHeight: '1.4'
      }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;
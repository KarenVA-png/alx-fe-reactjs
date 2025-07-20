function UserProfile(props) {
  return (
    <div style={{
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px 0',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        color: 'blue',  // Changed to exact "blue" as required
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
        Age: <span style={{ fontWeight: 'bold', color: 'blue' }}>{props.age}</span>  // Added blue here too
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
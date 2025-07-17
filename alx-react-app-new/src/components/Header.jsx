function Header() {
  return (
    <header style={{ 
      backgroundColor: 'navy', 
      color: 'white', 
      textAlign: 'center',
      padding: '20px',
      borderRadius: '5px',
      marginBottom: '20px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      fontSize: '1.2rem'
    }}>
      <h1 style={{ 
        margin: 0,
        fontSize: '2rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px'
      }}>
        My Favorite Cities
      </h1>
    </header>
  );
}

export default Header;
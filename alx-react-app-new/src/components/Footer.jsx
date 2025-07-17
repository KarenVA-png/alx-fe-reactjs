function Footer() {
  return (
    <footer style={{
      backgroundColor: 'navy',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: '30px',
      borderRadius: '5px',
      fontSize: '1rem',
      boxShadow: '0 -2px 5px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <p style={{
        margin: '0',
        letterSpacing: '0.5px',
        fontWeight: '300',
        textTransform: 'uppercase',
        fontSize: '0.9rem'
      }}>
        © 2023 City Lovers
      </p>
    </footer>
  );
}

export default Footer;
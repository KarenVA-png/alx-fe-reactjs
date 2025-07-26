import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
      <Link 
        to="/" 
        style={{ 
          color: 'white', 
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.2rem'
        }}
      >
        TechSolutions
      </Link>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link 
          to="/" 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          About
        </Link>
        <Link 
          to="/services" 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Services
        </Link>
        <Link 
          to="/contact" 
          style={{ 
            color: 'white', 
            textDecoration: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
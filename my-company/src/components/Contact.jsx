import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We'll contact you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ 
      padding: '2rem', 
      maxWidth: '600px', 
      margin: '0 auto',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <h1 style={{ color: '#2c3e50', marginBottom: '1rem' }}>Contact Us</h1>
      <form 
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ 
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ 
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          style={{ 
            padding: '0.75rem',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <button 
          type="submit"
          style={{
            padding: '0.75rem',
            backgroundColor: '#2c3e50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#2c3e50'}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
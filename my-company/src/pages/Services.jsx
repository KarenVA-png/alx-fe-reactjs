function Services() {
  const services = [
    "Enterprise Software Development",
    "Cloud Solutions Architecture",
    "Data Analytics & AI",
    "Cybersecurity Services",
    "IT Consulting"
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ color: '#2c3e50' }}>Our Services</h1>
      <ul style={{ 
        listStyle: 'none',
        padding: 0,
        fontSize: '1.1rem'
      }}>
        {services.map((service, index) => (
          <li key={index} style={{ 
            padding: '10px',
            margin: '5px 0',
            backgroundColor: '#f8f9fa',
            borderRadius: '4px'
          }}>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
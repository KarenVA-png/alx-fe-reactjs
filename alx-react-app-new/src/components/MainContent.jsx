function MainContent() {
  return (
    <main style={{
      backgroundColor: '#f0f8ff',
      padding: '25px',
      borderRadius: '8px',
      margin: '25px 0',
      borderLeft: '5px solid navy',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <p style={{
        margin: '0',
        color: '#2a4365',
        fontSize: '1.1rem',
        lineHeight: '1.6',
        fontWeight: '500'
      }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;
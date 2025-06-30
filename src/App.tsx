import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: "'Segoe UI', 'Roboto', 'Oxygen', sans-serif",
      color: '#1a202c',
      lineHeight: 1.6
    }}>
      <Navbar />
      
      <main style={{
        flex: 1,
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '2rem 1.5rem',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '300px',
          height: '300px',
          background: 'linear-gradient(135deg, #1a3d7c 0%, #2b6cb0 100%)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.15,
          zIndex: -1
        }} />
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
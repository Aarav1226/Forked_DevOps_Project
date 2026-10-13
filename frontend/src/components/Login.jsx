import React, { useState } from 'react';
import ColorBends from './ColorBends';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e, role) => {
    e.preventDefault();
    if (!username || !password) return;
    onLogin({ username, role });
  };

  return (
    <div className="login-page">
      {/* Full-screen ColorBends WebGL background with new palette */}
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        background: '#1e1e1e'   /* palette warm obsidian */
      }}>
        <ColorBends
          colors={["#00555a", "#2c4e37", "#1e1e1e"]}
          rotation={65}
          speed={0.12}
          scale={1.2}
          frequency={0.7}
          warpStrength={0.65}
          mouseInfluence={0.4}
          noise={0.02}
          parallax={0.3}
          iterations={1}
          intensity={1.1}
          bandWidth={8}
          transparent={false}
          autoRotate={0}
        />
      </div>

      {/* Subtle organic ambient glow */}
      <div className="login-ambient-gradient"></div>

      {/* Login card sits above the canvas */}
      <div className="login-card" style={{ position: 'relative', zIndex: 2 }}>
        <div className="login-card-badge">Campus Mobility Portal</div>

        <div className="logo-container">
          <img
            src="/campusride-logo.png"
            alt="CampusRide Logo"
            className="login-logo-img"
          />
          <div className="title">
            <h2>Campus<span>Ride</span></h2>
          </div>
          <p className="login-tagline">Bidholi &bull; Kandoli Transit System</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">SAP ID / Driver ID</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. STU1024 or DRIVER01"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="quick-fill-chips">
            <span className="quick-fill-label">Quick fill:</span>
            <button
              type="button"
              className="quick-chip"
              onClick={() => { setUsername('STU1024'); setPassword('password123'); }}
            >
              Student Demo
            </button>
            <button
              type="button"
              className="quick-chip"
              onClick={() => { setUsername('DRIVER01'); setPassword('driver123'); }}
            >
              Driver Demo
            </button>
          </div>

          <div className="btn-group">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e, 'student')}
              className="btn btn-student"
            >
              Enter Student Portal &rarr;
            </button>
            <button
              type="submit"
              onClick={(e) => handleSubmit(e, 'driver')}
              className="btn btn-driver"
            >
              Driver Portal Login
            </button>
          </div>

          <div className="login-trust-notice">
            <span>UPES Transit Network</span> &bull; <span>Live GPS Telemetry</span>
          </div>
        </form>
      </div>
    </div>
  );
}

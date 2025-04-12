import React from 'react'

const Headerr = () => {
  return (
    <header className="app-header">
        <div className="header-content">
          <h1>Hi, Admin</h1>
          <p className="welcome">Welcome back</p>
        </div>
        <div className="user-icon-container">
  <div className="user-icon">👤</div>
  <span className="online-status"></span>
  <div className="user-dropdown">
    <a href="#">Profile</a>
    <a href="#">Settings</a>
    <a href="#">Logout</a>
  </div>
  </div>
      </header>
  )
}

export default Headerr

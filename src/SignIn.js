import React from 'react';
import './SignIn.css'; 

function SignIn() {
  return (
    <div className="signin-container">
      
      <div className="signin-left">
  <div className="logo-container">
    <img src="spclogo.png" alt="School Logo" className="logo" />
    <div className="system-name">
  <span className="bold-text">School Inventory</span>
  <br />
  <span className="regular-text">Management System</span>
</div>
  </div>
</div>



     
<div className="signin-right">
  <h2>Sign In</h2>
  <form className="signin-form">
    <div className="form-group">
      <label htmlFor="username"></label>
      <input type="text" id="username" name="username" placeholder="Enter your username" required />
    </div>
    <div className="form-group">
      <label htmlFor="password"></label>
      <input type="password" id="password" name="password" placeholder="Enter your password" required />
    </div>
    <div className="form-actions">
      <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
      <a href="/signup" className="signup">Sign Up</a>
    </div>
    <center><button type="submit" className="login-button">Login</button></center>
    <div className="or-container">
      <span>or</span>
    </div>
    <div className="other-login-options">
      <button className="google-signin">
        <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google Logo" />
        Sign in with Google
      </button>
      <button className="facebook-signin">
        <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook Logo" />
        Sign in with Facebook
      </button>
    </div>
  </form>
</div>
    </div>
  );
}

export default SignIn;

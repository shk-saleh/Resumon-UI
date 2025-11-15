import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useAuthStore } from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const GoogleLoginButton = () => {
  
  const { googleLogin } = useAuthStore();
  const navigate = useNavigate();

  const handleGoogleSuccess = async (credentialResponse) => {
    const res = await googleLogin({ credential: credentialResponse.credential });
    if (res.success) {
      console.log("Google login successful");
      navigate('/dashboard'); // Redirect after success
    } else {
      console.error("Google login failed");
    }
  };

  const handleGoogleError = () => {
    console.error('Google Login Failed');
  };

  return (
    <div className='flex justify-center'>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        useOneTap
        theme="outline"
        size="large"
        shape="rectangular"
      />
    </div>
  );
};

export default GoogleLoginButton;

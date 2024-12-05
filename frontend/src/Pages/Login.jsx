import React from 'react'; 
import { Link } from 'react-router-dom'; // To enable navigation between routes.
import { useState } from 'react'; // For managing component state.

const Login = () => {
  // State to toggle between "Login" and "Sign Up"
  const [currentState, setCurrentState] = useState('Login');

  // Function to handle form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevents default form submission behavior (e.g., page reload).
    // Add your form submission logic here.
  };

  return (
    <form 
      onSubmit={onSubmitHandler} // Triggers when the form is submitted.
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-80'
    >
      {/* Header displaying Login or Sign Up */}
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' /> {/* Visual separator */}
      </div>
       
      {/* Conditionally render additional input for "Sign Up" */}
      {currentState === 'Login' ? '' : (
        <input 
          type="text" 
          className='w-full px-3 py-2 border-gray-800' 
          placeholder='Name' 
        />
      )}
      
      {/* Common input fields for both "Login" and "Sign Up" */}
      <input 
        type="text" 
        className='w-full px-3 py-2 border-gray-800' 
        placeholder='Email' 
      />
      <input 
        type="password" 
        className='w-full px-3 py-2 border-gray-800' 
        placeholder='Password' 
      />
   
      {/* Links for additional actions */}
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>Forgot Your Password?</p>
        {currentState === 'Login' ? (
          <p 
            onClick={() => setCurrentState('Sign Up')} // Switch to Sign Up
            className='cursor-pointer'
          >
            Create Account
          </p>
        ) : (
          <p 
            onClick={() => setCurrentState('Login')} // Switch to Login
            className='cursor-pointer'
          >
            Login Here
          </p>
        )}
      </div>

      {/* Submit button with dynamic text */}
      <button 
        className='bg-black text-white font-light px-8 py-2 mt-4'
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;

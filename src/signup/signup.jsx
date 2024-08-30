import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import Login from '../login/Login';

const Signup = () => {
    return (
        <div className='addUser'>
            <h3>Sign Up</h3>
            <form className='addUserForm'>
                <div className='inputGroup'>
                    <label htmlFor='name'>Name:</label>
                    <input
                        type='text'
                        id='name'
                        autoComplete='off'
                        placeholder='Enter your name'
                    />
                    <label htmlFor='name'>Email:</label>
                    <input
                        type='text'
                        id='name'
                        autoComplete='off'
                        placeholder='Enter your email'
                    />
                    <label htmlFor='name'>password:</label>
                    <input
                        type='password'
                        id='name'
                        autoComplete='off'
                        placeholder='Enter your password'
                    />
                    <button type="submit" class="btn btn-success">Sign Up</button>
                </div>
            </form>
            <div className='login'>
                <p>Already have an account? </p>
                <Link to="/login" type="submit" class="btn btn-primary">
                    Login</Link>
            </div>
        </div>
    );
}

export default Signup;

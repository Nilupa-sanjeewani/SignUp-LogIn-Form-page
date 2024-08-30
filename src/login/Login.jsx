import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    return (
        <div className='addUser'>
            <h3>Sign In</h3>
            <form className='addUserForm'>
                <div className='inputGroup'>

                    <label htmlFor='name'>Email:</label>
                    <input
                        type='text'
                        id='name'
                        autoComplete='off'
                        placeholder='Enter your name'
                    />
                    <label htmlFor='name'>password:</label>
                    <input
                        type='password'
                        id='name'
                        autoComplete='off'
                        placeholder='Enter your password'
                    />
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </form>
            <div className='login'>
                <p>Don't have Account ? </p>
                <Link to="/" type="Login" class="btn btn-success">
                    Sign up</Link>
            </div>
        </div>
    );
}

export default Login;

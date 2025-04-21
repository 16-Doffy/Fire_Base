import React from 'react';
import { auth } from '../FireBase/Firebase-config';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const Homepage = () => {
const handleSignOut = () =>{
    signOut(auth);
}

    return (
        <div className='gap-110'>
            <button onClick={handleSignOut}>
            <Link to="/sign-in"> SignOut</Link>
            <Link to="/sign-up"> Đăng Kí</Link>
            
            </button>
        </div>
    );
};

export default Homepage;


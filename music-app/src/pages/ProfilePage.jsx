import React from 'react';
import Profile from '../components/Profile';

const ProfilePage = ( {onLogout} ) => {
    return (
        <Profile onLogout={onLogout}/>
    );
}

export default ProfilePage;
import React from 'react';
import { useLoaderData } from 'react-router-dom';


const FriendDetails = () => {
    const friend = useLoaderData();
    const {name,address,email}=friend
    
    return (
        <div>
            <h1>Friend Details About <p> {name}</p></h1>
            <p>call him/her{friend.phone}</p>
            <p>City:{address.city}</p>
            <p>Email:{email}</p>
        </div>
    );
};

export default FriendDetails;
import React from 'react';
import './FriendList.css';
const FriendList = ({ friends }) => {
    return (
        <div>
            <ul>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li key={id}>
                        <img src={avatar}></img>
                        <p>{name}</p>
                        <p className={`status ${isOnline ? 'online' : 'offline'}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendList;
import React from 'react';
import './Profile.css'
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className='wraper'>
      <div >
        <img className='img' src={image} alt="User avatar" />
        <h2>{name}</h2>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};




export default Profile;
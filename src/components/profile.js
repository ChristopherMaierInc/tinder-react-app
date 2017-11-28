import React, { Component } from 'react';

const Profile = ({ firstName, nickName, lastName, imageURL }) => {
  return (
    <div className="profile">
      <div>
        <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="User Photo" />
      </div>
      <p>Name: {firstName} '{nickName}' {lastName}</p>
    </div>
  );
}

export default Profile;

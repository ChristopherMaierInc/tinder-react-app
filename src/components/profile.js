import React, { Component } from 'react';

const Profile = ({ firstName, nickName, lastName, imageURL, imageNum }) => {
  return (
    <div className="profile">
      <div>
        <img src={`https://randomuser.me/api/portraits/men/${imageNum}.jpg`} alt="User Photo" />
      </div>
      <p>Name: {firstName} '{nickName}' {lastName}</p>
    </div>
  );
}

export default Profile;

import React, { Component } from 'react';

const Profile = ({ firstName, nickName, lastName, imageURL }) => {
  return (
    <div className="profile">
      <div>
        <img src={ imageURL } alt="User Photo" />
      </div>
      <p>Name: {firstName} '{nickName}' {lastName}</p>
    </div>
  );
}

export default Profile;

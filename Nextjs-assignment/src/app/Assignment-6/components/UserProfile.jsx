import React from 'react';

const UserProfile = ({ name, email, phone }) => {
  return (
    <div>
      <h2 data-testid="name">{name}</h2>
      <p data-testid="email">{email}</p>
      <p data-testid="phone">{phone}</p>
    </div>
  );
};

export default UserProfile;

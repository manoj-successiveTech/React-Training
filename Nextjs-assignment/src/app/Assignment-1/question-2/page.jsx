// 2.Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.

'use client'
import React from 'react'
import '@/app/styles/welcome.css'

const UserCard = ({ name, email, avatarURL }) => {
  return (
    
    <div className="user-card">
      <img src={avatarURL} alt={name} className="user-avatar" />
      <div className="user-info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

const Page = () => {
  const users = [
    
    {
      name: 'Manoj Kumar',
      email: 'manoj@successive.com',
      avatarURL: '/avatar1.jpeg'
    },
    {
      name: 'Anany More',
      email: 'anany@successive.com',
      avatarURL: '/avatar2.jpeg'
    },
    {
      name: 'Aryan Thapak',
      email: 'aryan@successive.com',
      avatarURL: '/avatar3.jpeg'
    }
  ];

  return (
    <>    
    <div>Question -2</div>
    <div>Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
          Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
          Create multiple instances of the UserCard component with different user data.</div>

    <div className="user-cards-container">
        {users.map((user, index) => (
        <UserCard key={index} name={user.name} email={user.email} avatarURL={user.avatarURL} />
         ))}
        </div>
        
    </>

  );
};

export default Page;


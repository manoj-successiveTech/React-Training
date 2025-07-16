// 12.Create a simple voting application using the useReducer hook.
// Set up a reducer to manage the votes for different options.
// Create buttons representing voting options.
// Use the useReducer hook to access the votes state and dispatch actions.
// Allow users to vote for their preferred options.
// Display the current vote count for each option.

// pages/index.js

'use client'
import React, { useReducer } from 'react';
import styles from '@/app/styles/welcome2.css';

const initialState = {
  votes: {
    option1: 0,
    option2: 0,
    option3: 0,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'VOTE':
      return {
        ...state,
        votes: {
          ...state.votes,
          [action.payload]: state.votes[action.payload] + 1,
        },
      };
    default:
      return state;
  }
};

const VotingApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleVote = (option) => {
    dispatch({ type: 'VOTE', payload: option });
  };

  return (
    <div className='container'>
      <h1>Voting Application</h1>
      <div className='options'>
        <button onClick={() => handleVote('option1')}>Vote for Option 1</button>
        <button onClick={() => handleVote('option2')}>Vote for Option 2</button>
        <button onClick={() => handleVote('option3')}>Vote for Option 3</button>
      </div>
      <div className='results'>
        <p>Option 1: {state.votes.option1} votes</p>
        <p>Option 2: {state.votes.option2} votes</p>
        <p>Option 3: {state.votes.option3} votes</p>
      </div>
    </div>
  );
};

export default VotingApp;
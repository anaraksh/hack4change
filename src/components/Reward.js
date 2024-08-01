import React from 'react';
import { useLocation } from 'react-router-dom';


const Reward = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const score = parseInt(queryParams.get('score'), 10);

  const getReward = (score) => {
    if (score >= 50) return 'Gold Reward';
    if (score >= 25) return 'Silver Reward';
    return 'Bronze Reward';
  };

  return (
    <div className="reward-container">
      <h1>Congratulations!</h1>
      <p>Your Score: {score}</p>
      <p>Reward: {getReward(score)}</p>
    </div>
  );
};

export default Reward;

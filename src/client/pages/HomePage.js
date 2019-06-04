import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I'm the home best Component</div>
      <button onClick={() => console.log('Hiiiii')}>Press me</button>
    </div>
  );
}

export default { 
  component: Home
};
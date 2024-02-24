import React, { useState } from 'react';
import App from './App';

const Home = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className='Container ms-5'>
      <h1 className='text-white top'>Hi Welcome to <span className='text-primary'> Quiz </span></h1>
      <p className='mt-3 text-secondary'>Test your knowledge with our quiz. Answer the questions and see how well you know the subject!</p>

      {!quizStarted ? (
        <button onClick={handleStartQuiz} className="btn btn-primary me-1">Start Quiz</button>
      ) : (
        <App />
      )}
    </div>
  );
}

export default Home;

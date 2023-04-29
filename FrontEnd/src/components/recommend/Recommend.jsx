

import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Recommendations from './Recommendations';
import "./Recommend.css"
const Quiz = () => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      text: ' How do you like to travel?',
      options: [
        { text: 'Solo travel', score: 5 },
        { text: 'Couple travel', score: 4 },
        { text: 'Family travel', score: 3 },
        { text: 'Group travel', score: 2 },
      ],
    },
    {
      text: ' How long do you usually like to travel for?',
      options: [
        { text: 'Short trips (3-5 days)', score: 5 },
        { text: ' Week-long vacations', score: 4 },
        { text: 'Two weeks or longer', score: 3 },
      ],
    },
   
    {
      text: 'What kind of scenery do you prefer?',
      options: [
        { text: 'Mountains', score: 5 },
        { text: 'Beaches', score: 4 },
        { text: 'Forests', score: 3 },
        { text: 'Cities and Urban landscapes', score: 2 }
      ],
    },
    {
      text: 'How important is nightlife to you?',
      options: [
        { text: 'Very important', score: 5 },
        { text: 'Somewhat important', score: 4 },
        { text: 'Not important', score: 3 },
      ],
    },
    
    {
        text: 'whats your favourite cuisene?',
        options: [
          { text: 'Indian', score: 5 },
          { text: 'Mexican', score: 4 },
          { text: 'Italian', score: 3 },
          { text: 'American', score: 2 },
        ],
      },
      {
        text: 'where would you like to visit?',
        options: [
          { text: 'Holy places', score: 5 },
          { text: 'Parks', score: 4 },
          { text: 'Museums', score: 3 },
        ],
      },
      {
        text: 'what is your preffered weather?',
        options: [
          { text: 'Winter', score: 5 },
          { text: 'Summer', score: 4 },
          { text: 'Rainy', score: 3 },
          { text: 'Spring', score: 2 },
        ],
      },
      {
        text: 'Which of the following types of accommodation do you prefer?',
        options: [
          { text: 'Boutique hotels', score: 5 },
          { text: 'Resorts', score: 4 },
          { text: 'Vacation rentals', score: 3 },
        ],
      },
      {
        text: 'What kind of food do you like to eat while traveling?',
        options: [
          { text: 'Local cuisine', score: 5 },
          { text: 'Fine dining', score: 4 },
          { text: 'Street food', score: 3 },
          { text: ' Fast food', score: 2 },
        ],
      },
      {
        text: 'What kind of activities do you enjoy while traveling?',
        options: [
          { text: 'Historical and cultural tours', score: 5 },
          { text: ' Adventure sports', score: 4 },
          { text: 'Relaxation and spa', score: 3 },
          { text: ' Shopping', score: 2 },
        ],
      },
      {
        text: 'What kind of transportation do you prefer when traveling',
        options: [
          { text: 'Rental car', score: 5 },
          { text: 'Public transportation', score: 4 },
          { text: ' Private driver', score: 3 },
        ],
      },
  ];

  const handleAnswer = (answer) => {
    setScore(score + answer.score);
    setAnswers([...answers, answer]);
    setQuestionIndex(questionIndex + 1);
  };

  const currentQuestion = questions[questionIndex];

  return (
    <>
    <Navbar/>
    <div className='recmd'>
    <div className='recmi'>
        <h3>Confused ?</h3>
        <p>We are here to help !</p>
        <p>Tell us your preferences , We'll tell you your next holiday destination</p>
      </div>
      {questionIndex < questions.length ? (
        <div className='recmdd'>
          <h2 >{currentQuestion.text}</h2>
          <ul className='ul'>
            {currentQuestion.options.map((option) => (
              <li key={option.text}>
                <button className="ans" onClick={() => handleAnswer(option)}>
                  {option.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Recommendations score={score} />
      )}
    </div>
    </>
  );
};

export default Quiz;




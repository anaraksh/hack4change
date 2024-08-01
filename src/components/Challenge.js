// src/components/Challenge.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './chall.css';

const questions = [
  {
    question: "What is your business idea?",
    answers: [
      { text: "Online Marketplace", impact: "70%" },
      { text: "Local Store", impact: "60%" },
      { text: "Consultancy", impact: "50%" },
      { text: "Freelancing", impact: "40%" }
    ]
  },
  {
    question: "How will you fund your startup?",
    answers: [
      { text: "Personal Savings", impact: "50%" },
      { text: "Loans", impact: "40%" },
      { text: "Investors", impact: "70%" },
      { text: "Crowdfunding", impact: "60%" }
    ]
  },
  {
    question: "What is your target market?",
    answers: [
      { text: "Local Community", impact: "40%" },
      { text: "National", impact: "60%" },
      { text: "International", impact: "70%" },
      { text: "Niche Market", impact: "50%" }
    ]
  },
  {
    question: "What is your main marketing strategy?",
    answers: [
      { text: "Social Media", impact: "60%" },
      { text: "Traditional Advertising", impact: "40%" },
      { text: "Word of Mouth", impact: "50%" },
      { text: "Content Marketing", impact: "70%" }
    ]
  },
  {
    question: "What is the unique selling point of your product?",
    answers: [
      { text: "Price", impact: "50%" },
      { text: "Quality", impact: "70%" },
      { text: "Innovation", impact: "60%" },
      { text: "Customer Service", impact: "40%" }
    ]
  }
];

const Challenge = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswerSelect = (questionIndex, answer) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    navigate('/results', { state: { selectedAnswers } });
  };

  return (
    <div className="challenge-container">
      {questions.map((question, questionIndex) => (
        <div key={questionIndex} className="question-item">
          <h3>{question.question}</h3>
          <div className="answers">
            {question.answers.map((answer, answerIndex) => (
              <button
                key={answerIndex}
                onClick={() => handleAnswerSelect(questionIndex, answer)}
                className={`answer-button ${selectedAnswers[questionIndex] === answer ? 'selected' : ''}`}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit} className="submit-button">Submit</button>
    </div>
  );
};

export default Challenge;

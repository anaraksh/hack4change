import React, { useState } from 'react';
import Question from './Question';
import DecisionResult from './DecisionResult';

const StoryProgression = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);

  const scenarios = [
    {
      id: 1,
      scenario: "You have just launched a new tech startup. You have limited funds and need to decide how to allocate resources effectively.",
      questions: [
        {
          id: 1,
          text: "How much of your budget will you allocate to marketing?",
          options: ["20%", "30%", "50%"],
        },
        {
          id: 2,
          text: "Will you focus on online or offline marketing?",
          options: ["Online", "Offline", "Both"],
        },
        {
          id: 3,
          text: "How will you handle customer feedback?",
          options: ["Ignore it", "Use it to improve products", "Address it publicly"],
        },
      ],
    },
    {
      id: 2,
      scenario: "Your startup is growing, and you need to hire your first team members. It’s crucial to build a strong team to support your vision.",
      questions: [
        {
          id: 4,
          text: "What will be your top priority when hiring new team members?",
          options: ["Skills and experience", "Cultural fit", "Cost-effectiveness"],
        },
        {
          id: 5,
          text: "How will you ensure that the new hires align with your company’s culture?",
          options: ["Conduct thorough interviews", "Offer a trial period", "Provide comprehensive onboarding"],
        },
        {
          id: 6,
          text: "How will you motivate your team?",
          options: ["Competitive salaries", "Flexible work hours", "Regular team-building activities"],
        },
      ],
    },
    {
      id: 3,
      scenario: "Your startup has received a small investment. You need to manage the funds wisely to ensure the company’s growth and sustainability.",
      questions: [
        {
          id: 7,
          text: "What will be your first major expense?",
          options: ["Product development", "Marketing", "Hiring staff"],
        },
        {
          id: 8,
          text: "How will you track and manage your finances?",
          options: ["Hire an accountant", "Use financial software", "Handle it personally"],
        },
        {
          id: 9,
          text: "What strategy will you use to ensure financial stability?",
          options: ["Keep costs low", "Seek additional funding", "Increase sales aggressively"],
        },
      ],
    },
    {
      id: 4,
      scenario: "You are developing a new product and need to decide on the key features to include in the first release.",
      questions: [
        {
          id: 10,
          text: "How will you determine which features to prioritize?",
          options: ["Customer feedback", "Market research", "Competitor analysis"],
        },
        {
          id: 11,
          text: "What approach will you take to product testing?",
          options: ["Internal testing", "Beta testing with select customers", "Public launch with a feedback loop"],
        },
        {
          id: 12,
          text: "How will you handle feature requests from users post-launch?",
          options: ["Add them to a backlog", "Implement immediately", "Evaluate and decide based on impact"],
        },
      ],
    },
    {
      id: 5,
      scenario: "You need to acquire your first 100 customers to validate your business model.",
      questions: [
        {
          id: 13,
          text: "What strategy will you use to attract your first customers?",
          options: ["Social media marketing", "Referral programs", "Partnerships with other businesses"],
        },
        {
          id: 14,
          text: "How will you measure the success of your customer acquisition efforts?",
          options: ["Number of sign-ups", "Customer engagement metrics", "Revenue generated"],
        },
        {
          id: 15,
          text: "What will you do to retain these customers?",
          options: ["Offer excellent customer service", "Provide regular updates and new features", "Create a loyalty program"],
        },
      ],
    },
    {
      id: 6,
      scenario: "A new competitor has entered the market with a similar product at a lower price. You need to decide how to respond.",
      questions: [
        {
          id: 16,
          text: "What will be your first step in addressing the competition?",
          options: ["Lower your prices", "Improve your product’s features", "Increase marketing efforts"],
        },
        {
          id: 17,
          text: "How will you differentiate your product from the competitor’s?",
          options: ["Highlight unique features", "Focus on superior customer service", "Emphasize brand values and mission"],
        },
        {
          id: 18,
          text: "What long-term strategy will you adopt to stay ahead of the competition?",
          options: ["Continuous innovation", "Building strong customer relationships", "Expanding into new markets"],
        },
      ],
    },
    {
      id: 7,
      scenario: "Your startup faces a major crisis due to a product defect that has affected several customers.",
      questions: [
        {
          id: 19,
          text: "What will be your immediate action to address the issue?",
          options: ["Issue a public apology", "Offer refunds or replacements", "Investigate and fix the defect"],
        },
        {
          id: 20,
          text: "How will you communicate with affected customers?",
          options: ["Email them directly", "Post updates on social media", "Hold a press conference"],
        },
        {
          id: 21,
          text: "What measures will you take to prevent such issues in the future?",
          options: ["Implement stricter quality control", "Improve customer support", "Regularly update and test the product"],
        },
      ],
    },
    {
      id: 8,
      scenario: "Your startup is doing well, and you are considering scaling the business. You need to make strategic decisions to ensure successful growth.",
      questions: [
        {
          id: 22,
          text: "What area will you focus on first to scale the business?",
          options: ["Expanding the product line", "Entering new markets", "Increasing marketing efforts"],
        },
        {
          id: 23,
          text: "How will you fund the scaling process?",
          options: ["Reinvest profits", "Seek additional investment", "Take out a loan"],
        },
        {
          id: 24,
          text: "What will you do to maintain the company culture as you grow?",
          options: ["Develop a strong onboarding process", "Regularly communicate company values", "Foster an inclusive and collaborative environment"],
        },
      ],
    },
  ];

  const handleAnswerChange = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const handleNextScenario = () => {
    setCurrentScenario(currentScenario + 1);
    setShowResult(false);
    setAnswers({});
  };

  if (showResult) {
    return (
      <div>
        <DecisionResult answers={answers} />
        {currentScenario < scenarios.length - 1 && (
          <button onClick={handleNextScenario}>Next Scenario</button>
        )}
      </div>
    );
  }

  return (
    <div>
      <h1>Scenario</h1>
      <p>{scenarios[currentScenario].scenario}</p>
      {scenarios[currentScenario].questions.map((question) => (
        <Question key={question.id} question={question} onAnswerChange={handleAnswerChange} />
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StoryProgression;

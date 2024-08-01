import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faBook, faQuestionCircle, faStar, faUserTie, faBullhorn, faGift, faChartLine, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import '../qu.css'; // Ensure your CSS file is imported

const UserOptions = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="centered-container">
      <h2>Choose an Option</h2>
      <div className="icon-container">
        <div className="icon-card" onClick={() => handleNavigation('/challenge/1')}>
          <FontAwesomeIcon icon={faTrophy} size="3x" />
          <p>Challenge</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/storyprogression')}>
          <FontAwesomeIcon icon={faBook} size="3x" />
          <p>Story Progression</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/quiz-topics')}>
          <FontAwesomeIcon icon={faQuestionCircle} size="3x" />
          <p>Quiz</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/entrepreneurguide')}>
          <FontAwesomeIcon icon={faStar} size="3x" />
          <p>EntrepreneurGuide</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/reward')}>
          <FontAwesomeIcon icon={faGift} size="3x" />
          <p>Reward</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/leaderboard')}>
          <FontAwesomeIcon icon={faChartLine} size="3x" />
          <p>Leaderboard</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/feedback')}>
          <FontAwesomeIcon icon={faCommentDots} size="3x" />
          <p>Feedback</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/feature2')}>
          <FontAwesomeIcon icon={faUserTie} size="3x" />
          <p>Feature 2</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/feature6')}>
          <FontAwesomeIcon icon={faBullhorn} size="3x" />
          <p>Feature 6</p>
        </div>
        <div className="icon-card" onClick={() => handleNavigation('/feedback')}>
          <FontAwesomeIcon icon={faCommentDots} size="3x" />
          <p>Feature 8</p>
        </div>
      </div>
    </div>
  );
};

export default UserOptions;

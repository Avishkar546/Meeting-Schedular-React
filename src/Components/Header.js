import React from 'react';

const Header = ({ currentDate, onPrevWeek, onNextWeek }) => {
  return (
    <div>
      <button onClick={onPrevWeek}>Previous</button>
      <span>{currentDate}</span>
      <button onClick={onNextWeek}>Next</button>
    </div>
  );
};

export default Header;

import React from "react";

const Header = ({ currentDate, onPrevWeek, onNextWeek }) => {
  return (
    <>
      <button onClick={onPrevWeek}>Previous</button>
      <span>{currentDate}</span>
      <button onClick={onNextWeek}>Next</button>
      {/* <h1>Header component</h1> */}
    </>
  );
};

export default Header;

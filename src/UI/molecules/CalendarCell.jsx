import React from "react";
import PropTypes from "prop-types";

const CalendarCell = ({ children, cellDesign, action }) => {
  return (
    <div
      className={`${cellDesign} flex items center   justify-center p-2`}
      onClick={action}
    >
      {children}
    </div>
  );
};

CalendarCell.propTypes = {
  cellDesign: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  action: PropTypes.func,
};

export default CalendarCell;

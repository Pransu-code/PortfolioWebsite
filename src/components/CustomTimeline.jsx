/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
// import '../css/customtimeline.css'; // Make sure this file contains the CSS for the timeline

const Timeline = ({ children }) => (
  <div className="custom-timeline">
    {children}
  </div>
);

const TimelineItem = ({
  dateText, children, dateStyle, itemStyle,
}) => (
  <div className="custom-timeline-item" style={itemStyle}>
    <div className="custom-timeline-date" style={dateStyle}>
      {dateText}
    </div>
    <div className="custom-timeline-content">
      {children}
    </div>
  </div>
);

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
};

TimelineItem.propTypes = {
  dateText: PropTypes.string.isRequired,
  dateStyle: PropTypes.object,
  itemStyle: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export { Timeline, TimelineItem };

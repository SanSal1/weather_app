import React from "react";

/**
 * Component for displaying a status message.
 * 
 * @param {string} message visible text
 */
const Status = ({ message }) => {
  return (
    <div id='status-container'>
      <p>
        {message}
      </p>
    </div>
  );
}
 
export default Status;

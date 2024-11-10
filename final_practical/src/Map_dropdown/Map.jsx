import React from 'react';

const Map = () => {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div>
      <label htmlFor="weekdays-dropdown">Select a day:</label>
      <select id="weekdays-dropdown">
        {weekdays.map((day, index) => (
          <option key={index} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Map;

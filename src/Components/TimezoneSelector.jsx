import React from 'react';

const TimezoneSelector = ({ timezone, onChange }) => {
  return (
    <div>
      <select value={timezone} onChange={e => onChange(e.target.value)}>
        <option value="UTC-0">UTC-0</option>
        <option value="UTC+5">UTC+5</option>
        {/* Add more timezones as needed */}
      </select>
    </div>
  );
};

export default TimezoneSelector;

import React, { useState, useEffect } from 'react';

const generateYears = (startYear, endYear) => {
  const years = [];
  for (let i = endYear; i >= startYear; i--) {
    years.push(i);
  }
  return years;
};

const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const DateOfBirthSelector = ({ month, day, year, handleDayChange, handleYearChange, handleMonthChange }) => {
  const months = [
    { value: 1, label: 'Jan' },
    { value: 2, label: 'Feb' },
    { value: 3, label: 'Mar' },
    { value: 4, label: 'Apr' },
    { value: 5, label: 'May' },
    { value: 6, label: 'Jun' },
    { value: 7, label: 'Jul' },
    { value: 8, label: 'Aug' },
    { value: 9, label: 'Sep' },
    { value: 10, label: 'Oct' },
    { value: 11, label: 'Nov' },
    { value: 12, label: 'Dec' },
  ];

  const [days, setDays] = useState([]);

  useEffect(() => {
    if (year && month) {
      const numberOfDays = getDaysInMonth(year, month);
      setDays(Array.from({ length: numberOfDays }, (_, i) => i + 1));
    } else {
      setDays([]);
    }
  }, [year, month]);

  const years = generateYears(1950, 2024);

  return (
    <div className="row">
      <div className="col-12 col-md-4 mb-3">
        <select className="form-select" value={year} onChange={handleYearChange}>
          <option value="">Year</option>
          {years.map(year => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <select className="form-select" value={month} onChange={handleMonthChange}>
          <option value="">Month</option>
          {months.map(month => (
            <option key={month.value} value={month.value}>
              {month.label}
            </option>
          ))}
        </select>
      </div>
      <div className="col-12 col-md-4 mb-3">
        <select className="form-select" value={day} onChange={handleDayChange}>
          <option value="">Day</option>
          {days.map(day => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DateOfBirthSelector;

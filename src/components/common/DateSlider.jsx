/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { useState } from "react";

const DateSlider = ({ onDateChange, onFilterChange }) => {
  const [dateRange, setDateRange] = useState({
    startDate: undefined,
    endDate: undefined,
    key: "selection",
  });

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
    onDateChange(ranges.selection.startDate, ranges.selection.endDate);
    onFilterChange(ranges.selection.startDate, ranges.selection.endDate);
  };

  const handleClearFilter = () => {
    setDateRange({
      startDate: undefined,
      endDate: undefined,
      key: "selection",
    });
    onDateChange(null, null);
    onFilterChange(null, null);
  };

  return (
    <>
      <h5>Filter bookings by date</h5>
      <DateRangePicker
        ranges={[dateRange]}
        onChange={handleSelect}
        className="mb-4"
      />
      <button onClick={handleClearFilter} className="btn btn-secondary">
        Clear Filter
      </button>
    </>
  );
};
export default DateSlider;
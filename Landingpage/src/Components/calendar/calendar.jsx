import React, { useState, useEffect } from "react";
import "./calendar.css";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Calendar = ({ sendDataToParent }) => {
  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());
  const [activeDay, setActiveDay] = useState(date.getDate());
  const [days, setDays] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    renderCalendar();
  }, [currYear, currMonth, activeDay]);

  const renderCalendar = () => {
    const firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
    const lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    const lastDayofMonth = new Date(
      currYear,
      currMonth,
      lastDateofMonth
    ).getDay();
    const lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    const liTag = [];

    for (let i = firstDayofMonth; i > 0; i--) {
      liTag.push(
        <li key={`prev-${i}`} className="inactive">
          {lastDateofLastMonth - i + 1}
        </li>
      );
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      liTag.push(
        <li
          key={`curr-${i}`}
          className={i === activeDay ? "active" : ""}
          onClick={() => handleDayClick(i)}
        >
          {i}
        </li>
      );
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      liTag.push(
        <li key={`next-${i}`} className="inactive">
          {i - lastDayofMonth + 1}
        </li>
      );
    }

    setDays(liTag);
  };

  const handlePrevNext = (direction) => {
    const newMonth = direction === "prev" ? currMonth - 1 : currMonth + 1;

    if (newMonth < 0 || newMonth > 11) {
      const newDate = new Date(currYear, newMonth, new Date().getDate());
      setCurrYear(newDate.getFullYear());
      setCurrMonth(newDate.getMonth());
      setActiveDay(newDate.getDate());
    } else {
      setCurrMonth(newMonth);
      setActiveDay(1); // Reset active day when month changes
    }
  };

  const handleDayClick = (day) => {
    setActiveDay(day);
    console.log(`Selected Date: ${day} ${months[currMonth]} ${currYear}`);

    // Ensure month is always two digits
    let month = (currMonth + 1).toString().padStart(2, "0");

    // Ensure day is always two digits
    let formattedDay = day.toString().padStart(2, "0");

    // Send formatted date in "YYYY-MM-DD" format
    sendDataToParent(`${currYear}-${month}-${formattedDay}`);
  };

  return (
    <div className="wrapper">
      <header>
        <p className="current-date">{`${activeDay} ${months[currMonth]} ${currYear}`}</p>
        <div className="icons">
          <span
            id="prev"
            className="material_symbols"
            onClick={() => handlePrevNext("prev")}
          >
            <CiCircleChevLeft />
          </span>
          <span
            id="next"
            className="material_symbols"
            onClick={() => handlePrevNext("next")}
          >
            <CiCircleChevRight />
          </span>
        </div>
      </header>
      <div className="calendar">
        <ul className="weeks">
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className="days">{days}</ul>
      </div>
    </div>
  );
};

export default Calendar;

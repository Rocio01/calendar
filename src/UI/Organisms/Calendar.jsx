import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  format,
  sub,
  add,
  startOfMonth,
  endOfMonth,
  differenceInDays,
} from "date-fns";

// UI
import CalendarCell from "../molecules/CalendarCell";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePreviousMonth = () => {
    setCurrentDate(sub(currentDate, { months: 1 }));
  };

  const handleNextMonth = () => {
    setCurrentDate(add(currentDate, { months: 1 }));
  };

  const handlePreviousYear = () => {
    setCurrentDate(sub(currentDate, { years: 1 }));
  };

  const handleNextYear = () => {
    setCurrentDate(add(currentDate, { years: 1 }));
  };

  const days = ["S", "M", "T", "W", "TH", "F", "SA"];
  const firstDateOfTheMonth = startOfMonth(currentDate);
  const lastDateOfTheMonth = endOfMonth(currentDate);
  const daysOfTheMonth =
    differenceInDays(lastDateOfTheMonth, firstDateOfTheMonth) + 1;

  const datesOfTheMonthArray = Array.from(
    { length: daysOfTheMonth },
    (item, index) => index + 1
  );

  const initialDay = firstDateOfTheMonth.getDay();
  const finalDay = 6 - lastDateOfTheMonth.getDay();

  const initialEmptyDatesArray = Array.from({ length: initialDay }, () => "");
  const finalEmptyDatesArray = Array.from({ length: finalDay }, () => "");

  return (
    <div className=" w-full flex flex-col px-[5%] font-bold text-[20px] text-[#9CBDB9]">
      <h1 className="text-3xl py-8">Calendar</h1>

      <div className="grid grid-cols-7 items-center justify-center text-center bg-[#F0F0F0] p-4 py-8 rounded-xl ">
        <CalendarCell
          cellDesign="text-sm cursor-pointer "
          action={() => handlePreviousYear()}
        >
          {"< year"}
        </CalendarCell>
        <CalendarCell
          cellDesign="cursor-pointer"
          action={() => handlePreviousMonth()}
        >
          {"< "}
        </CalendarCell>
        <CalendarCell cellDesign="col-span-3 text-[20px]  ">
          {format(currentDate, "MMMM yyyy")}
        </CalendarCell>
        <CalendarCell
          cellDesign="cursor-pointer"
          action={() => handleNextMonth()}
        >
          {" >"}
        </CalendarCell>
        <CalendarCell
          cellDesign="text-sm cursor-pointer"
          action={() => handleNextYear()}
        >
          {" year >"}
        </CalendarCell>
        {days.map((day, index) => (
          <div key={index}>
            <CalendarCell children={day} cellDesign="text-black " />
          </div>
        ))}

        {initialEmptyDatesArray.map((date, index) => (
          <div key={index} className="h-full">
            <CalendarCell cellDesign="  h-[100%]" />
          </div>
        ))}

        {datesOfTheMonthArray.map((date, index) => (
          <div key={index}>
            <CalendarCell children={date} cellDesign="text-black " />
          </div>
        ))}

        {finalEmptyDatesArray.map((date, index) => (
          <div key={index} className="h-full">
            <CalendarCell cellDesign="  h-[100%]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

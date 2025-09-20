"use client";
import { Calendar } from "lucide-react";
import { useState, useRef } from "react";

export default function BasicDateTimePicker() {
  const [dateTime, setDateTime] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDateTime(e.target.value);
  };

  const handleIconClick = () => {
    // Try to trigger native picker if supported
    if (inputRef.current) {
      (inputRef.current as any).showPicker?.();
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex justify-center py-10">
      <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 w-full max-w-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Basic date time picker
        </h2>

        <div className="relative">
          <input
            ref={inputRef}
            type="datetime-local"
            value={dateTime}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-3 pr-10 text-sm shadow-sm 
                       focus:border-blue-500 focus:ring focus:ring-blue-200 transition
                       [appearance:none] [&::-webkit-calendar-picker-indicator]:hidden"
          />
          <button
            type="button"
            onClick={handleIconClick}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            <Calendar className="h-5 w-5" />
          </button>
        </div>

        {dateTime && (
          <p className="mt-3 text-sm text-gray-600">
            Selected: <span className="font-medium">{dateTime}</span>
          </p>
        )}
      </div>
    </div>
  );
}

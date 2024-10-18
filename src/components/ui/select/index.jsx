"use client";
import React, { useState } from "react";
import classNames from "classnames";
const lists = [
  {
    id: 1,
    name: "Option 1",
  },
  {
    id: 2,
    name: "Option 2",
  },
  {
    id: 3,
    name: "Option 3",
  },
  {
    id: 4,
    name: "Option 4",
  },
];

export default function Select({
  placeHolder,
  optionList,
  handleChange,
  radius = "small",
  size = "extraLarge",
  color = "gold",
  isBorder = "",
}) {
  const [value, setValue] = useState("Option 1");

  const radiusStyles = {
    small: "rounded-md",
    medium: "rounded-lg",
    large: "rounded-xl",
    full: "rounded-full",
  };
  const sizeStyles = {
    small: "px-4 py-2 text-sm",
    medium: "px-7 py-2 text-base",
    large: "px-10 py-2 text-lg w-full max-w-[453px]",
    extraLarge: "px-14 py-3 text-[14px] w-full max-w-[528px]",
  };
  const colorStyles = {
    // red: "bg-red-light text-white hover:bg-red-600",
    green: "bg-green-dark text-white hover:bg-green-light",
    yellow: "bg-[#B88E2F] text-white hover:bg-yellow-600",
    blue: "bg-blue-500 text-white hover:bg-blue-600",
    gray: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    black: "bg-black text-white hover:bg-black-200",
    gold: isBorder ? "border text-white bg-[#B88E2F]" : "text-[#9F9F9F] ",
  };

  const handleSelect = (event) => {
    setValue(event.target.value);
    if (handleChange) handleChange(event.target.value);
  };

  return (
    <select
      placeholder={placeHolder}
      onChange={handleSelect}
      value={value}
      className={classNames(
        radiusStyles[radius],
        sizeStyles[size],
        colorStyles[color],
        "border-[1px] border-[#9F9F9F]  py-2 px-4 outline-none text-[1rem]"
      )}
    >
      {lists.map((option) => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

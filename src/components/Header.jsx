import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import "./header.css";

export default function Header({ input, options, handleSelect, handleChange }) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setTimeout(() => {
      setIsFocused((prev) => !prev);
    }, 200);
  }

  return (
    <div id="header">
      <div id="search-bar__wrapper" onBlur={handleFocus}>
        <div
          id="search-bar"
          className={`${
            isFocused && options.length >= 1 ? "border-bottom" : null
          }`}
        >
          <HiSearch />
          <input
            id="search-bar__input"
            type="text"
            placeholder="Search for a city..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
          />
        </div>
        {isFocused && input && options.length >= 1 && (
          <div
            id="dropdown"
            className={`${options.length >= 1 ? "auto-complete" : null}`}
          >
            {options.map((option) => {
              return (
                <div
                  key={option.id}
                  id="dropdown__option"
                  onClick={() => handleSelect(option.name, option.country)}
                >
                  <SlLocationPin />
                  <div className="option__name">
                    <p className="option__city">{option.name}</p>
                    <p className="option__country">{option.country}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./CustomCheckbox.css";

const CustomCheckbox = () => {
  const [checkboxes, setCheckboxes] = useState(Array(5).fill(false));
  const [permanentChecks, setPermanentChecks] = useState(Array(5).fill(false));
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDoubleClick = (index) => {
    const newPermanentChecks = [...permanentChecks];
    newPermanentChecks[index] = !newPermanentChecks[index];
    setPermanentChecks(newPermanentChecks);
    if (!newPermanentChecks[index]) {
      const newCheckboxes = [...checkboxes];
      newCheckboxes[index] = false;
      setCheckboxes(newCheckboxes);
    }
  };

  const handleClick = (index) => {
    if (!permanentChecks[index]) {
      const newCheckboxes = [...checkboxes];
      newCheckboxes[index] = !newCheckboxes[index];
      setCheckboxes(newCheckboxes);
    } else {
      const newCheckboxes = [...checkboxes];
      newCheckboxes[index] = !newCheckboxes[index];
      setCheckboxes(newCheckboxes);
      if (!newCheckboxes[index]) {
        const newPermanentChecks = [...permanentChecks];
        newPermanentChecks[index] = false;
        setPermanentChecks(newPermanentChecks);
      }
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleDoneClick = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="checkbox-container">
      <div className="button-with-checkbox" onClick={toggleDropdown}>
        <span className="button-text">All Pages</span>
        <div
          className={`checkbox ${checkboxes[0] ? "checked" : ""} ${
            permanentChecks[0] ? "permanent" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            handleClick(0);
          }}
          onDoubleClick={(e) => {
            e.stopPropagation();
            handleDoubleClick(0);
          }}
        ></div>
      </div>
      {dropdownOpen && (
        <div className="dropdown">
          {checkboxes.slice(1).map((isChecked, index) => (
            <div key={index} className="button-with-checkbox">
              <span className="button-text">Page {index + 1}</span>
              <div
                className={`checkbox ${isChecked ? "checked" : ""} ${
                  permanentChecks[index + 1] ? "permanent" : ""
                }`}
                onClick={() => handleClick(index + 1)}
                onDoubleClick={() => handleDoubleClick(index + 1)}
              ></div>
            </div>
          ))}
          <div className="done-button" onClick={handleDoneClick}>
            Done
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomCheckbox;

import React from "react";
import { dropdown } from "./styles.css";

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  return (
    <select value={selectedOption} onChange={onSelect} className={dropdown}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

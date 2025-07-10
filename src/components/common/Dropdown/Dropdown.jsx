import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as S from "./Dropdown.styles";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Dropdown = ({
  options = [],
  value = null,
  onChange,
  placeholder = "Select an option",
  disabled = false,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const getSelectedText = () => {
    if (value === null) {
      return <S.PlaceholderText>{placeholder}</S.PlaceholderText>;
    }
    const selectedOption = options.find((opt) => opt.value === value);
    return (
      <S.SelectedText>{selectedOption?.label || placeholder}</S.SelectedText>
    );
  };

  return (
    <S.DropdownContainer ref={dropdownRef} {...props}>
      <S.DropdownTrigger
        onClick={handleToggle}
        isOpen={isOpen}
        disabled={disabled}
      >
        {getSelectedText()}

        <S.ChevronIcon>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </S.ChevronIcon>
      </S.DropdownTrigger>

      {isOpen && (
        <S.DropdownMenu>
          {options.map((option) => (
            <S.DropdownItem
              key={option.value}
              onClick={() => handleOptionClick(option)}
              selected={value === option.value}
            >
              {option.label}
            </S.DropdownItem>
          ))}
        </S.DropdownMenu>
      )}
    </S.DropdownContainer>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  clearable: PropTypes.bool,
};

export default Dropdown;

import { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./Input.styles";
import { FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

const Input = ({
  value,
  onChange,
  placeholder = "",
  error = "",
  disabled = false,
  type = "text",
  icon = null,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!value);

  const handleChange = (e) => {
    setHasValue(!!e.target.value);
    onChange && onChange(e);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClear = () => {
    onChange && onChange({ target: { value: "" } });
    setHasValue(false);
  };

  const renderIcon = () => {
    if (icon === "search") {
      return (
        <S.InputIcon>
          <FiSearch />
        </S.InputIcon>
      );
    }
    return null;
  };

  const renderClearButton = () => {
    if (hasValue && !disabled) {
      return (
        <S.InputIcon onClick={handleClear} clickable>
          <FaTimes />
        </S.InputIcon>
      );
    }
    return null;
  };

  return (
    <S.InputContainer>
      {renderIcon()}
      <S.StyledInput
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
        hasError={!!error}
        hasIcon={!!icon}
        {...props}
      />
      {renderClearButton()}
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.InputContainer>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  icon: PropTypes.oneOf(["search", null]),
};

export default Input;

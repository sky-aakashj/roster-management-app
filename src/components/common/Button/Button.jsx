import PropTypes from "prop-types";
import * as S from "./Button.styles";

const Button = ({
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  onClick,
  children,
  type = "button",
  ...props
}) => {
  const handleClick = (e) => {
    if (disabled || loading) return;
    onClick && onClick(e);
  };

  return (
    <S.StyledButton
      variant={variant}
      size={size}
      disabled={disabled || loading}
      onClick={handleClick}
      type={type}
      {...props}
    >
      {loading ? <S.LoadingSpinner /> : children}
    </S.StyledButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "outline", "ghost"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

export default Button;

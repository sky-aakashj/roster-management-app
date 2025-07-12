import PropTypes from "prop-types";
import * as S from "./LoadingComponent.styles";

const LoadingComponent = ({
  mainText = "Please wait...",
  subText = "we're loading the slots",
}) => {
  return (
    <S.LoadingContainer>
      <S.LoadingIcon />
      <S.LoadingText>{mainText}</S.LoadingText>
      <S.LoadingSubText>{subText}</S.LoadingSubText>
    </S.LoadingContainer>
  );
};

LoadingComponent.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
};
export default LoadingComponent;

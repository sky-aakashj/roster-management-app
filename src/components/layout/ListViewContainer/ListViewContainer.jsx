import WeekView from "../WeekView/WeekView";
import DateNavigation from "../DateNavigation/DateNavigation";
import ProviderContainer from "../ProviderContainer/ProviderContainer";
import * as S from "./ListViewContainer.styles";

const ListViewContainer = () => {
  return (
    <S.ListViewContainer>
      <WeekView />
      <DateNavigation />
      <ProviderContainer />
    </S.ListViewContainer>
  );
};

export default ListViewContainer;

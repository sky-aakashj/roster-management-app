import WeekView from "../WeekView/WeekView";
import DateNavigation from "../DateNavigation/DateNavigation";
import * as S from "./ListViewContainer.styles";

const ListViewContainer = () => {
  return (
    <S.ListViewContainer>
      <WeekView />
      <DateNavigation />
    </S.ListViewContainer>
  );
};

export default ListViewContainer;

import { useSelector } from "react-redux";
import WeekView from "../WeekView/WeekView";
import DateNavigation from "../DateNavigation/DateNavigation";
import ProviderContainer from "../ProviderContainer/ProviderContainer";
import * as S from "./ListViewContainer.styles";
import LoadingComponent from "../../common/LoadingComponent/LoadingComponent";

const ListViewContainer = () => {
  const { loading, error } = useSelector((state) => state.providers);
  return (
    <S.ListViewContainer>
      <WeekView />
      <DateNavigation />

      {loading ? (
        <LoadingComponent
          mainText="Please wait..."
          subText="we're loading the slots"
        />
      ) : (
        <ProviderContainer />
      )}
      {error && <div>Error: {error}</div>}
    </S.ListViewContainer>
  );
};

export default ListViewContainer;

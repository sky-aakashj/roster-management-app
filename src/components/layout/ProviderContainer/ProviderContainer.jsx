import { useSelector } from "react-redux";
import ProviderSlot from "../ProviderSlot/ProviderSlot";
import * as S from "./ProviderContainer.styles";

const ProviderContainer = () => {
  const filteredProviders = useSelector(
    (state) => state.providers.filteredProviders
  );
  const selectedDate = useSelector((state) => state.date.selectedDate);

  return (
    <S.ProvidersList>
      {filteredProviders.map((provider) => (
        <ProviderSlot
          key={provider.id}
          provider={provider}
          selectedDate={selectedDate}
        />
      ))}
    </S.ProvidersList>
  );
};

export default ProviderContainer;

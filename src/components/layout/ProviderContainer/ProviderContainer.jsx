import { useSelector } from "react-redux";
import ProviderSlot from "../ProviderSlot/ProviderSlot";
import * as S from "./ProviderContainer.styles";

const ProviderContainer = () => {
  const filteredProviders = useSelector(
    (state) => state.providers.filteredProviders
  );
  const selectedDate = useSelector((state) => state.date.selectedDate);

  if (!filteredProviders || filteredProviders.length === 0) {
    return (
      <S.NoProvidersMessage>
        No providers available for the selected filters.
      </S.NoProvidersMessage>
    );
  }

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

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchProviders,
  addSelectedProvider,
  removeSelectedProvider,
  clearSelectedProviders,
} from "../../../redux/actions/searchActions";
import * as S from "./SearchPanel.styles";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { FaTimes } from "react-icons/fa";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [localSearchTerm, setLocalSearchTerm] = useState("");
  const [showInfoText, setShowInfoText] = useState(true);
  const { results, selectedProviders, providerColors } = useSelector(
    (state) => state.search
  );

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (localSearchTerm.trim()) {
        dispatch(searchProviders(localSearchTerm));
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [localSearchTerm, dispatch]);

  const handleSelectProvider = (provider) => {
    dispatch(addSelectedProvider(provider));
    setLocalSearchTerm("");
  };

  const handleRemoveProvider = (providerId) => {
    dispatch(removeSelectedProvider(providerId));
  };

  const handleClearAll = () => {
    dispatch(clearSelectedProviders());
  };

  return (
    <S.SearchPanelContainer>
      {selectedProviders?.length < 5 && (
        <Input
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          placeholder="Search provider"
          icon="search"
          onFocus={() => setShowInfoText(false)}
        />
      )}
      {showInfoText && selectedProviders?.length === 0 && (
        <S.SearchInfo>
          You can search up to 5 provider to view their availability
          specifically.
        </S.SearchInfo>
      )}

      {results.length > 0 && (
        <S.SearchResults>
          {results.map((provider) => (
            <div
              key={provider.id}
              onClick={() => handleSelectProvider(provider)}
            >
              {provider.name}
            </div>
          ))}
        </S.SearchResults>
      )}

      {selectedProviders.length > 0 && (
        <>
          <S.SelectedProviders>
            {selectedProviders.map((provider) => (
              <S.ProviderChip
                key={provider.id}
                style={{
                  backgroundColor: providerColors[provider.id],
                }}
              >
                {provider.name}
                <button onClick={() => handleRemoveProvider(provider.id)}>
                  <FaTimes />
                </button>
              </S.ProviderChip>
            ))}
          </S.SelectedProviders>

          {selectedProviders.length >= 5 && (
            <S.ClearAllButton>
              <Button variant="outline" size="small" onClick={handleClearAll}>
                Clear All
              </Button>
            </S.ClearAllButton>
          )}
        </>
      )}
    </S.SearchPanelContainer>
  );
};

export default SearchPanel;

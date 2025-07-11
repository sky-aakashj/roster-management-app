import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as S from "./SearchPanel.styles";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import { FaTimes } from "react-icons/fa";

const SearchPanel = ({
  providers,
  onSelectProvider,
  onRemoveProvider,
  selectedProviders,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showInput, setShowInput] = useState(true);

  useEffect(() => {
    if (selectedProviders.length >= 5) {
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  }, [selectedProviders]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = providers.filter((provider) =>
      provider.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, providers]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectProvider = (provider) => {
    if (!selectedProviders.some((p) => p.id === provider.id)) {
      onSelectProvider(provider);
    }
    setSearchTerm("");
    setSearchResults([]);
  };

  const handleRemoveProvider = (providerId) => {
    onRemoveProvider(providerId);
  };

  const handleClearAll = () => {
    selectedProviders.forEach((provider) => {
      onRemoveProvider(provider.id);
    });
    setShowInput(true);
  };

  // Generate different background colors for chips
  const chipColors = ["#E3F2FF", "#EBE3F5", "#E3F5EB", "#FFE9E3", "#F5E3ED"];

  return (
    <S.SearchPanelContainer>
      {showInput && (
        <Input
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search provider"
          icon="search"
        />
      )}

      {searchResults.length > 0 && (
        <S.SearchResults>
          {searchResults.map((provider) => (
            <div
              key={provider.id}
              onClick={() => handleSelectProvider(provider)}
            >
              {provider.name}
            </div>
          ))}
        </S.SearchResults>
      )}

      {selectedProviders.length > 0 ? (
        <>
          <S.SelectedProviders>
            {selectedProviders.map((provider, index) => (
              <S.ProviderChip
                key={provider.id}
                style={{
                  backgroundColor: chipColors[index % chipColors.length],
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
      ) : (
        <S.SearchInfo>
          You can search up to 5 provider to view their availability
          specifically.
        </S.SearchInfo>
      )}
    </S.SearchPanelContainer>
  );
};

SearchPanel.propTypes = {
  providers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectProvider: PropTypes.func.isRequired,
  onRemoveProvider: PropTypes.func.isRequired,
  selectedProviders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SearchPanel;

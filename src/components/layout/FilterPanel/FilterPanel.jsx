import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Dropdown from "../../common/Dropdown/Dropdown";
import Button from "../../common/Button/Button";
import * as S from "./FilterPanel.styles";

const FilterPanel = ({
  filters,
  onFilterChange,
  onApplyFilters,
  onClearFilters,
}) => {
  const [tempFilters, setTempFilters] = useState(filters);

  useEffect(() => {
    setTempFilters(filters);
  }, [filters]);

  const serviceOptions = [
    { value: "therapist", label: "Therapist" },
    { value: "psychiatrist", label: "Psychiatrist" },
  ];

  const typeOptions = [
    { value: "inhouse", label: "In-house" },
    { value: "external", label: "External" },
  ];

  const centerOptions = [
    { value: "clinic1", label: "Clinic 1" },
    { value: "clinic2", label: "Clinic 2" },
    { value: "clinic3", label: "Clinic 3" },
  ];

  const handleServiceChange = (services) => {
    setTempFilters((prev) => ({ ...prev, services }));
  };

  const handleTypeChange = (types) => {
    setTempFilters((prev) => ({ ...prev, types }));
  };

  const handleCenterChange = (centers) => {
    setTempFilters((prev) => ({ ...prev, centers }));
  };

  const handleApply = () => {
    onFilterChange(tempFilters);
    onApplyFilters();
  };

  const handleClear = () => {
    const clearedFilters = {
      services: [],
      types: [],
      centers: [],
    };
    setTempFilters(clearedFilters);
    onFilterChange(clearedFilters);
    onClearFilters();
  };

  const hasFilters =
    tempFilters.services.length > 0 ||
    tempFilters.types.length > 0 ||
    tempFilters.centers.length > 0;

  return (
    <S.FilterContainer>
      <Dropdown
        options={serviceOptions}
        value={tempFilters.services}
        onChange={handleServiceChange}
        multiple
        placeholder="All services"
      />

      <Dropdown
        options={typeOptions}
        value={tempFilters.types}
        onChange={handleTypeChange}
        multiple
        placeholder="All types"
      />

      <Dropdown
        options={centerOptions}
        value={tempFilters.centers}
        onChange={handleCenterChange}
        multiple
        placeholder="All centers"
      />

      <S.FilterActions>
        {hasFilters && (
          <Button variant="outline" onClick={handleClear} size="small">
            Reset
          </Button>
        )}
        <Button
          disabled={!hasFilters}
          variant="primary"
          onClick={handleApply}
          size="small"
        >
          Apply
        </Button>
      </S.FilterActions>
    </S.FilterContainer>
  );
};

FilterPanel.propTypes = {
  filters: PropTypes.shape({
    services: PropTypes.array,
    types: PropTypes.array,
    centers: PropTypes.array,
  }).isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onApplyFilters: PropTypes.func.isRequired,
  onClearFilters: PropTypes.func.isRequired,
};

export default FilterPanel;

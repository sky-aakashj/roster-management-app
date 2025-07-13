import { useDispatch, useSelector } from "react-redux";
import {
  setServiceFilter,
  setTypeFilter,
  setCenterFilter,
  applyFilters,
  clearFilters,
} from "../../../redux/actions/filterActions";
import Dropdown from "../../common/Dropdown/Dropdown";
import Button from "../../common/Button/Button";
import * as S from "./FilterPanel.styles";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.providers);
  const filters = useSelector((state) => state.filters);

  // Dynamically derive all filter options from providers data
  const getUniqueOptions = (transformFn) => {
    const uniqueValues = new Set();

    providers.allProviders.forEach((provider) => {
      const value = transformFn(provider);
      if (value !== undefined && value !== null) {
        uniqueValues.add(value);
      }
    });

    return Array.from(uniqueValues).map((value) => ({
      value,
      label:
        typeof value === "string"
          ? value.charAt(0).toUpperCase() + value.slice(1)
          : String(value),
    }));
  };

  // Service options - extract from provider_usertype
  const serviceOptions = [
    { value: "allServices", label: "All Services" },
    ...getUniqueOptions((p) => p.provider_usertype),
  ];

  // Type options - convert is_inhouse boolean to 'inhouse'/'external'
  const typeOptions = [
    { value: "allTypes", label: "All Types" },
    ...getUniqueOptions((p) => (p.is_inhouse ? "inhouse" : "external")),
  ];

  const centerOptions = [
    { value: "allCenters", label: "All Centers" },
    ...providers.allProviders
      .map((p) => p.clinic_details)
      .filter(Boolean)
      .filter(
        (clinic, index, self) =>
          index === self.findIndex((c) => c.id === clinic.id)
      )
      .map((clinic) => ({
        value: clinic.id,
        label: clinic.name,
      })),
  ];

  const handleServiceChange = (selected) => {
    if (selected === filters.service) {
      return;
    }
    dispatch(setServiceFilter(selected));
  };

  const handleTypeChange = (selected) => {
    if (selected === filters.type) {
      return;
    }
    dispatch(setTypeFilter(selected));
  };

  const handleCenterChange = (selected) => {
    if (selected === filters.center) {
      return;
    }
    dispatch(setCenterFilter(selected));
  };

  const handleApply = () => {
    dispatch(applyFilters());
  };

  const handleClear = () => {
    dispatch(clearFilters());
  };

  const hasFilters =
    filters.service !== "allServices" ||
    filters.type !== "allTypes" ||
    filters.center !== "allCenters";

  return (
    <S.FilterContainer>
      <Dropdown
        options={serviceOptions}
        value={filters.service || null}
        onChange={handleServiceChange}
      />

      <Dropdown
        options={typeOptions}
        value={filters.type || null}
        onChange={handleTypeChange}
      />

      <Dropdown
        options={centerOptions}
        value={filters.center || null}
        onChange={handleCenterChange}
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

export default FilterPanel;

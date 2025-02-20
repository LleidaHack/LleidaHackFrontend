import React from "react";
import InputSearch from "../InputSearch/InputSearch";
import FiltersComponent from "../FiltersComponent/FiltersComponent";
import { useSearch } from "src/context/SearchContext";
const HeaderEvents = ({title}) => {
  const{setContextType} = useSearch();
  setContextType("Events");
  return (
    <div className="header-events bg-background-patron px-16 min-h-0 bg-cover bg-no-repeat bg-center py-12 z-[50]">
      <div className="header-events__content ">
        <h1 className="header-events__title">{title}</h1>
        <div className="searcher_div mb-12 ">
          <InputSearch/>
        </div>
        <div className="filters_div mb-12">
          <FiltersComponent />
        </div>
      </div>
    </div>
  );
};

export default HeaderEvents;

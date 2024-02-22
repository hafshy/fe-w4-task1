import React from "react";
import FilterTag from "./FilterTag";

export default function FilterBox({ filters, onCloseFilter, onClearFilter }) {
  return (
    <div className="w-full max-w-5xl min-h-[4rem] mb-10">
      <div className="bg-white rounded-md px-7 py-4 w-full shadow-lg flex justify-between">
        <ul className="flex flex-wrap gap-4">
          {filters.map((filter) => (
            <FilterTag text={filter} key={filter} onCloseFilter={onCloseFilter}/>
          ))}
        </ul>
        <button className="text-sm text-cyan-dark font-bold underline" onClick={onClearFilter}>
          Clear
        </button>
      </div>
    </div>
  );
}

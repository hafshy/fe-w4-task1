import React from "react";

export default function ButtonPage({ pageNumber, isActive, onClickIndex }) {
  return (
    <li>
      <button
        className={`mx-1 px-6 py-4 rounded shadow ${
          isActive ? "text-white" : "text-blue-500"
        } ${isActive ? "bg-cyan-dark" : "bg-white"} ${
          isActive ? "font-bold" : ""
        }`}
        onClick={() => onClickIndex(pageNumber)}
      >
        {pageNumber}
      </button>
    </li>
  );
}

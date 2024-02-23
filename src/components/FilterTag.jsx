import React from "react";

export default function FilterTag({ text, onCloseFilter }) {
  return (
    <li className="flex">
      <label
        className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md cursor-default"
        style={{ alignSelf: "center" }}
      >
        {text}
      </label>
      <div>
        <button
          className="bg-cyan-dark h-full flex items-center p-2 rounded-r-md hover:bg-cyan-very-dark"
          onClick={() => onCloseFilter(text)}
        ></button>
      </div>
    </li>
  );
}

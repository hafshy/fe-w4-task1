import React from "react";

export default function ButtonTag({ buttonText, onClickTag }) {
  return (
    <button onClick={() => onClickTag(buttonText)}>
      <div className="bg-cyan-light-2 px-2 py-1.5 text-sm text-cyan-dark font-bold rounded-l-md  hover:bg-cyan-dark hover:text-white rounded-r-md ">
        {buttonText}
      </div>
    </button>
  );
}

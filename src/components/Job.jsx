import React from "react";
import ButtonTag from "./ButtonTag";

export default function Job({ jobData, onClickTag }) {
  return (
    <li
      className={
        "relative bg-white p-7 rounded-md flex items-center gap-6 shadow-lg mb-12 lg:mb-6 " +
        (jobData.featured ? "border-l-4 border-cyan-dark" : "")
      }
    >
      <div className="absolute -top-7 w-14 lg:relative lg:w-auto lg:top-0">
        <img
          src={jobData.logo}
          alt={"." + jobData.logo}
          className="rounded-full w-full"
        />
      </div>
      <div className="w-full lg:flex justify-between items-center">
        <div>
          <div>
            <span className="text-sm text-cyan-dark font-bold">
              {jobData.company}
            </span>
            {jobData.new && (
              <span className="bg-cyan-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                NEW!
              </span>
            )}
            {jobData.featured && (
              <span className="bg-cyan-very-dark px-2 py-1 rounded-xl ml-2 text-xs text-white font-bold">
                FEATURED
              </span>
            )}
          </div>
          <a
            href="#"
            className="block my-1 text-base font-bold hover:text-cyan-dark"
          >
            {jobData.position}
          </a>
          <ul className="flex text-cyan-dark-grayish gap-4 text-sm font-medium">
            <li>{jobData.postedAt}</li>
            <li className="before:content-['•'] before:mr-3 after:content-['•'] after:ml-3">
              {jobData.contract}
            </li>
            <li>{jobData.location}</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-wrap gap-4 border-t border-cyan-dark-grayish mt-4 pt-4 lg:border-0">
            <li>
              <ButtonTag buttonText={jobData.role} onClickTag={onClickTag}/>
            </li>
            <li>
              <ButtonTag buttonText={jobData.level} onClickTag={onClickTag}/>
            </li>
            {jobData.languages.map((language, index) => (
              <li key={index}>
                <ButtonTag buttonText={language} onClickTag={onClickTag}/>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

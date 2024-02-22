import image1 from "../public/images/bg-header-desktop.svg";
import FilterBox from "./components/FilterBox";
import Job from "./components/Job";
import jobListingData from "./data/data.json";
import { useState } from "react";

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobListingData);

  const handleClickTag = (tag) => {
    if (!selectedFilter.includes(tag)) {
      setSelectedFilter((prevs) => [...prevs, tag]);
      console.log(selectedFilter);
      refreshList();
    }
  };

  const handleCloseFilter = (tag) => {
    setSelectedFilter((prevs) => prevs.filter((filter) => filter !== tag));
    refreshList();
  };

  const handleClearFilter = () => {
    setSelectedFilter([]);
    setFilteredJobs(jobListingData);
  };

  function refreshList() {
    if (selectedFilter.length === 0) {
      setFilteredJobs(jobListingData);
      return;
    }
    setFilteredJobs(
      jobListingData.filter((job) =>
        selectedFilter.includes(
          (filter) =>
            filter === job.role ||
            filter === job.level ||
            job.languages.includes((language) => language === filter)
        )
      )
    );
  }

  return (
    <>
      <header
        className="bg-cyan-dark bg-no-repeat bg-cover h-44 bg-header-desktop"
        style={{ background: image1 }}
      ></header>
      <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
        <div className="max-w-5xl m-auto relative -top-8 ">
          {selectedFilter.length > 0 && (
            <FilterBox
              filters={selectedFilter}
              onCloseFilter={handleCloseFilter}
              onClearFilter={handleClearFilter}
            />
          )}
          <div>
            <ul>
              {filteredJobs.map((job) => (
                <Job jobData={job} key={job.id} onClickTag={handleClickTag} />
              ))}
            </ul>
          </div>
          <nav className="mt-4">
            <ul className="flex justify-center">
              <li>
                <button
                  className={`mx-1 px-6 py-4 rounded shadow 
                          text-blue-500 bg-white
                      }`}
                >
                  1
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
};

export default App;

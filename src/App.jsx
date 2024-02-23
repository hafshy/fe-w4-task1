import image1 from "./assets/bg-header-desktop.svg";
import ButtonPage from "./components/ButtonPage";
import FilterBox from "./components/FilterBox";
import Job from "./components/Job";
import jobListingData from "./data/data.json";
import { useState, useEffect } from "react";

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jobListingData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 5;

  const handleClickTag = (tag) => {
    if (!selectedFilter.includes(tag)) {
      setSelectedFilter((prevs) => [...prevs, tag]);
    }
  };

  const handleCloseFilter = (tag) => {
    setSelectedFilter((prevs) => prevs.filter((filter) => filter !== tag));
  };

  const handleClearFilter = () => {
    setSelectedFilter([]);
  };

  const handleClickPage = (pageNumber) => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    if (selectedFilter.length === 0) {
      setFilteredJobs(jobListingData);
      return;
    }
    setFilteredJobs(
      jobListingData.filter((job) =>
        selectedFilter.every(
          (filter) =>
            job.role === filter ||
            job.level === filter ||
            job.languages.includes(filter)
        )
      )
    );
  }, [selectedFilter]);

  return (
    <>
      <header
        className="bg-cyan-dark bg-no-repeat bg-cover h-44 bg-header-desktop"
        style={{ backgroundImage: `url(${image1})` }}
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
              {filteredJobs
                .slice((currentPage - 1) * itemPerPage, currentPage * itemPerPage)
                .map((job) => (
                  <Job jobData={job} key={job.id} onClickTag={handleClickTag} />
                ))}
            </ul>
          </div>
          <nav className="mt-4">
            <ul className="flex justify-center">
              {[
                ...Array(Math.ceil(filteredJobs.length / itemPerPage)).keys(),
              ].map((num) => (
                <ButtonPage
                  pageNumber={num + 1}
                  isActive={currentPage == num + 1}
                  key={num}
                  onClickIndex={handleClickPage}
                />
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
};

export default App;

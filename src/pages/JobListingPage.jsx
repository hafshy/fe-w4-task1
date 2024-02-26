import ButtonPage from "../components/ButtonPage";
import FilterBox from "../components/FilterBox";
import Job from "../components/Job";
import { jsonData } from "../data/data.js";
import { useState, useEffect } from "react";

const JobListingPage = () => {
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(jsonData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 10;

  window.scrollTo(0, 0);

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
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    if (selectedFilter.length === 0) {
      setFilteredJobs(jsonData);
      return;
    }
    setFilteredJobs(
      jsonData.filter((job) =>
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
      <main className="bg-cyan-light min-h-[80vh] pb-8 px-6">
        <div className="max-w-5xl m-auto relative pt-8">
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
                .slice(
                  (currentPage - 1) * itemPerPage,
                  currentPage * itemPerPage
                )
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

export default JobListingPage;

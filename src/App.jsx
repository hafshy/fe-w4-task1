import { BrowserRouter, Route, Routes } from "react-router-dom";
import JobListingPage from "./pages/JobListingPage";
import JobDetailPage from "./pages/JobDetailPage";
import JobLandingPage from "./pages/JobLandingPage";
import JobListingLayout from "./components/JobListingLayout";

const App = () => {
  // return <JobListingPage />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<JobLandingPage />} />
          <Route path="jobs" element={<JobListingLayout />}>
            <Route index element={<JobListingPage />} />
            <Route path=":id" element={<JobDetailPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

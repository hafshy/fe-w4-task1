import {
    BrowserRouter,
    Route,
    RouterProvider,
    Routes,
    createBrowserRouter,
} from "react-router-dom";
import JobListingPage from "./pages/JobListingPage";
import JobDetailPage from "./pages/JobDetailPage";
import JobLandingPage from "./pages/JobLandingPage";
import JobListingLayout from "./components/JobListingLayout";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./pages/PrivateRoute";
import { useState, useEffect } from "react";

const App = () => {
    const isLogin = localStorage.getItem("isLogin");
    const [isAllowed, setIsAllowed] = useState(true);

    useEffect(() => {
        console.log("check");
        if (!isLogin) {
            setIsAllowed(false);
        } else {
            setIsAllowed(true);
        }

        const interval = setInterval(() => {
            const isLogin = localStorage.getItem("isLogin");
            console.log("interval");
            if (!isLogin) {
                setIsAllowed(false);
            } else {
                setIsAllowed(true);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isLogin]);

    const router = createBrowserRouter([
        {
            path: "/",
            errorElement: <ErrorPage />,
            element: (
                <PrivateRoute isAllowed={isAllowed}>
                    <JobListingLayout />
                </PrivateRoute>
            ),
            children: [
                {
                    path: "",
                    element: <JobListingPage />,
                },
                {
                    path: "jobs/:id",
                    element: <JobDetailPage />,
                },
            ],
        },
        {
            path: "/login",
            element: (
                <PrivateRoute redirectTo="/" isAllowed={!isAllowed}>
                    <JobLandingPage />
                </PrivateRoute>
            ),
        },
    ]);

    const router2 = createBrowserRouter([
        {
            path: "/",
            element: <JobLandingPage setIsAllowed={setIsAllowed} />,
            errorElement: <ErrorPage />,
        },
        {
            path: "jobs",
            element: (
                <PrivateRoute isAllowed={isAllowed}>
                    <JobListingLayout />
                </PrivateRoute>
            ),
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "",
                    element: <JobListingPage />,
                },
                {
                    path: ":id",
                    element: <JobDetailPage />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default App;

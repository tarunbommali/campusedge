import React, { lazy, Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import SuspenseLoading from "./components/global/SuspenseLoading";

// Lazy Load Routes
const Home = lazy(() => import("./routes/Home"));
const Aboutus = lazy(() => import("./routes/Aboutus"));
const Roadmaps = lazy(() => import("./routes/Roadmaps"));
const Helpdesk = lazy(() => import("./components/about/Helpdesk"));
const Learnings = lazy(() => import("./routes/Learnings"));
const InterviewPrep = lazy(() => import("./routes/InterviewPrep"));
const InterviewApp = lazy(() => import("./routes/InterviewApp"));

const AppLayout = () => {
  const currentTheme = useSelector((state) => state.theme) || "light";
  const bg_color = currentTheme === "dark" ? "bg-[#111827]" : "bg-[#ffffff]";

  return (
    <div className={`flex flex-col min-h-screen ${bg_color}`}>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-20 bg-white shadow-md">
        <Header />
      </header>

      {/* Content Section with padding to avoid overlap */}
      <main className={`flex-1 mt-16 ${bg_color}` }>
        <Suspense fallback={<SuspenseLoading />}>
          <Outlet />
        </Suspense>
        <Analytics />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<SuspenseLoading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<SuspenseLoading />}>
            <Aboutus />
          </Suspense>
        ),
      },
      {
        path: "/roadmaps",
        element: (
          <Suspense fallback={<SuspenseLoading />}>
            <Roadmaps />
          </Suspense>
        ),
      },
      {
        path: "/helpdesk",
        element: (
          <Suspense fallback={<SuspenseLoading />}>
            <Helpdesk />
          </Suspense>
        ),
      },
      {
        path: "/learnings",
        element: (
          <Suspense fallback={<SuspenseLoading />}>
            <Learnings />
          </Suspense>
        ),
      },
      {
        path: "/interviewPrep",
        element: (
          <Suspense fallback={<SuspenseLoading />}>
            <InterviewPrep />
          </Suspense>
        ),
      },
      {
        path: "/ai-interview",
        element: (
          <Suspense fallback={<SuspenseLoading />}>
            <InterviewApp />
          </Suspense>
        ),
      },
    ],
  },
]);

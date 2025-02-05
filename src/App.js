import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Aboutus from './routes/Aboutus';
import Home from './routes/Home';
import Helpdesk from './components/about/Helpdesk';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import Roadmaps from './routes/Roadmaps';
import Learnings from './routes/Learnings';
import InterviewPrep from './routes/InterviewPrep';
import InterviewApp from './routes/InterviewApp';
import { useSelector } from 'react-redux';

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
      <main className="flex-1 mt-16"> {/* mt-16 matches header height */}
        <Outlet />
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
      { path: "/", element: <Home /> },
      { path: "/about-us", element: <Aboutus /> },
      { path: "/roadmaps", element: <Roadmaps /> },
      { path: "/helpdesk", element: <Helpdesk /> },
      { path: "/learnings", element: <Learnings /> },
      { path: "/interviewPrep", element: <InterviewPrep /> },
      { path: "/ai-interview", element: <InterviewApp /> },
    ],
  },
]);

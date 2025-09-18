import { Routes, Route, useLocation } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import ErrorBoundary from "../components/ErrorBoundory";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import NotFound from "@/pages/NotFound";
import Services from "@/pages/Services";
import TopNotchProjects from "@/pages/Projects";
import BlogsSection from "@/pages/Blogs";
import TechServicesLandingPage from "@/pages/TechServices";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
// const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        />
        <Route
          path="/about-us"
          element={
            <ErrorBoundary>
              <AboutUs />
            </ErrorBoundary>
          }
        />
        <Route
          path="/our-services"
          element={
            <ErrorBoundary>
              <Services />
            </ErrorBoundary>
          }
        />
        <Route
          path="/our-projects"
          element={
            <ErrorBoundary>
              <TopNotchProjects />
            </ErrorBoundary>
          }
        />
        <Route
          path="/tech-services"
          element={
            <ErrorBoundary>
              <TechServicesLandingPage />
            </ErrorBoundary>
          }
        />
        <Route
          path="/contact-us"
          element={
            <ErrorBoundary>
              <ContactUs />
            </ErrorBoundary>
          }
        />
         <Route
          path="/blogs"
          element={
            <ErrorBoundary>
              <BlogsSection />
            </ErrorBoundary>
          }
        />

        <Route
          path="*"
          element={
            <ErrorBoundary>
              <NotFound />
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;



// src/routes/AppRoutes.jsx
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import ErrorBoundary from "../components/ErrorBoundory";

// Pages
const Home = lazy(() => import("../pages/Home"));
import AboutUs from "@/pages/AutomationPages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import NotFound from "@/pages/NotFound";
import Services from "@/pages/AutomationPages/Services";
import TopNotchProjects from "@/pages/AutomationPages/Projects";
import BlogsSection from "@/pages/AutomationPages/Blogs";
import TechServicesLandingPage from "@/pages/TechServicesPages/TechServicesHome";
import AutomationHome from "@/pages/AutomationPages/AutomationHome";
import AboutTech from "@/pages/TechServicesPages/AboutUs";
import OurTechServices from "@/pages/TechServicesPages/Services";

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainLayout />}>
        {/* Root home */}
        <Route
          index
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        />

        {/* ================= Automations section ================= */}
        <Route path="automations">
          <Route
            index
            element={
              <ErrorBoundary>
                <AutomationHome />
              </ErrorBoundary>
            }
          />
          <Route
            path="about-us"
            element={
              <ErrorBoundary>
                <AboutUs />
              </ErrorBoundary>
            }
          />
          <Route
            path="our-services"
            element={
              <ErrorBoundary>
                <Services />
              </ErrorBoundary>
            }
          />
          <Route
            path="our-projects"
            element={
              <ErrorBoundary>
                <TopNotchProjects />
              </ErrorBoundary>
            }
          />
          <Route
            path="blogs"
            element={
              <ErrorBoundary>
                <BlogsSection />
              </ErrorBoundary>
            }
          />
          <Route
            path="careers"
            element={
              <ErrorBoundary>
                <NotFound /> {/* TODO: replace with Careers page when ready */}
              </ErrorBoundary>
            }
          />
        </Route>

        {/* ================= Tech Services section (hyphenated) ================= */}
        <Route path="tech-services">
          <Route
            index
            element={
              <ErrorBoundary>
                <TechServicesLandingPage />
              </ErrorBoundary>
            }
          />
          <Route
            path="about-us"
            element={
              <ErrorBoundary>
                <AboutTech />
              </ErrorBoundary>
            }
          />
          <Route
            path="our-services"
            element={
              <ErrorBoundary>
                <OurTechServices />
              </ErrorBoundary>
            }
          />
          <Route
            path="our-projects"
            element={
              <ErrorBoundary>
                <TopNotchProjects />
              </ErrorBoundary>
            }
          />
          <Route
            path="blogs"
            element={
              <ErrorBoundary>
                <BlogsSection />
              </ErrorBoundary>
            }
          />
          <Route
            path="careers"
            element={
              <ErrorBoundary>
                <NotFound /> {/* TODO: replace with Careers page when ready */}
              </ErrorBoundary>
            }
          />
        </Route>

        {/* Alias without hyphen → redirect to hyphenated base */}
        <Route path="techservices/*" element={<Navigate to="/tech-services" replace />} />

        {/* Shared top-level */}
        <Route
          path="contact-us"
          element={
            <ErrorBoundary>
              <ContactUs />
            </ErrorBoundary>
          }
        />

        {/* 404 */}
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

// import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "@/components/Footer";

// const MainLayout = () => {

//   return (
//     <div className="flex h-screen w-screen overflow-hidden bg-[#0D0D0D]">
//       {/* Right section: header + main content */}
//       <div className="flex flex-col flex-1 h-full overflow-hidden">

//         <Header />

//         {/* Scrollable main content area */}
//         <main className="flex-1 overflow-y-auto bg-gray-50">
//           <Outlet />
//           <Footer />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default MainLayout;








// // src/layouts/MainLayout.jsx
// import { Outlet, useLocation } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "@/components/Footer";

// const MainLayout = () => {
//   const { pathname } = useLocation();

//   // show header/footer only after a service is chosen
//   const inSection =
//     pathname.startsWith("/automations") ||
//     pathname.startsWith("/tech-services") ||
//     pathname.startsWith("/techservices");

//   return (
//     <div className="flex min-h-dvh w-full bg-[#0D0D0D] overflow-x-hidden">
//       <div className="flex flex-col flex-1 min-h-dvh w-full">
//         {inSection && <Header />}

//         {/* Scrollable main; clamp horizontal overflow */}
//         <main
//           className={[
//             "flex-1 w-full overflow-y-auto overflow-x-hidden",
//             inSection ? "bg-gray-50" : "bg-[#0D0D0D]",
//           ].join(" ")}
//         >
//           <Outlet />
//         </main>

//         {inSection && <Footer />}
//       </div>
//     </div>
//   );
// };

// export default MainLayout;







// src/layouts/MainLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "@/components/Footer";

/** Fixed, behind-all, full-viewport background video */
function BackgroundVideo({ src }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <video
        className="h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        tabIndex={-1}
      />
    </div>
  );
}

const MainLayout = () => {
  const { pathname } = useLocation();

  // Show header/footer ONLY after a service is chosen
  const inSection =
    pathname.startsWith("/automations") ||
    pathname.startsWith("/tech-services") ||
    pathname.startsWith("/techservices");

  return (
    <div className="relative flex min-h-dvh w-full overflow-x-hidden">
      {/* Background video on the selection/landing views */}
      {!inSection && (
        <>
          {/* TODO: replace with your actual video & poster under /public */}
          <BackgroundVideo
            src="/assets/Videos/ThancosTechBg.mp4"
          />
          {/* Optional dark overlay for readability */}
          <div className="pointer-events-none fixed inset-0 -z-10 bg-black/60" />
        </>
      )}

      <div className="flex flex-col flex-1 min-h-dvh w-full">
        {inSection && <Header />}

        {/* Make content transparent when video is visible */}
        <main
          className={[
            "flex-1 w-full overflow-y-auto overflow-x-hidden",
            inSection ? "bg-gray-50" : "bg-transparent",
          ].join(" ")}
        >
          <Outlet />
        </main>

        {inSection && <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;

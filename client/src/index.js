import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Link, Navigate, RouterProvider, useNavigate } from "react-router-dom";
import Root from "./Components/Static/Root.js";
import Error from "./Components/Static/Error.js";
import HomePage from "./Routes/HomePage";
import GetStarted from "./Routes/GetStarted";
import Login from "./Routes/Login";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Account from "./Routes/Account";
import Develop from "./Routes/Develop";
import TherapistPortal from "./Routes/TherapistPortal";
import Billing from "./Routes/Billing";
import TherapistSettings from "./Routes/TherapistSettings";
import Appointments from "./Routes/Appointments";
import LogOut from "./Routes/LogOut";
import PatientPortal from "./Routes/PatientPortal";
import { store } from "./Services/store";
import { Provider } from "react-redux";
import PatientRecords from "./Components/Pieces/PatientRecords";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import TherapistHome from "./Routes/TherapistHome";
import SentimentAnalysis from "./Components/Pieces/SentimentAnalysis";
import { useAuthHook } from "./Services/hooks";
import "./index.css";
import TherapistDashboard from "./Components/Pieces/TherapistDashboard";
import PatientDashboard from "./Components/Pieces/PatientDashboard";

function RestrictPage(/** @type {{state: 'loggedIn' | 'loggedOut'}} */ { children, state = "loggedIn" }) {
  // if is not logged in then show not logged else show child
  const auth = useAuthHook();

  // only sho the page if the state and auth state match
  if ((state === "loggedIn" && auth.isLoggedIn) || (state === "loggedOut" && auth.isLoggedOut)) {
    return children;
  }

  return <Error />;
}

function RedirectPage({ children, state = "loggedIn", to = "/" }) {
  const auth = useAuthHook();

  if (state === "loggedOut" && auth.isLoggedOut) {
    return children;
  }

  const homeBase = `/${auth.userType}/portal`;
  return <Navigate to={homeBase} />;
}

/** @type {import("react-router-dom").RouteObject[]} */
const therapistRoutes = [
  {
    path: "/therapist/account",
    element: <Account />,
  },
  {
    path: "/therapist/develop",
    element: <Develop />,
  },

  {
    path: "/therapist/home",
    element: <TherapistHome />,
  },
  {
    path: "/therapist/",
    element: <Navigate to="/portal" />,
  },

  {
    path: "/therapist/portal",
    element: <TherapistDashboard />,
  },
  {
    path: "/therapist/appointments",
    element: <Appointments />,
  },
  {
    path: "/therapist/patient-records",
    element: <PatientRecords />,
  },
  {
    path: "/therapist/therapist/billing",
    element: <Billing />,
  },
  {
    path: "/therapist/settings",
    element: <TherapistSettings />,
  },

  // {
  //   path: '/patient/profile',
  //   element: <TherapistProfile />
  // },
  // {
  //   path: '/patient/settings',
  //   element: <TherapistSettings />
  // }
];

/** @type {import("react-router-dom").RouteObject[]} */
const patientRoutes = [
  {
    path: "/patient/portal",
    element: <PatientDashboard />,
  },
  {
    path: "/patient/",
    element: <Navigate to="patient/portal" />,
  },
  { path: "/patient/appointments", element: <>hello appointments</> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <RedirectPage to="/therapist/home" state="loggedOut">
            <HomePage />
          </RedirectPage>
        ),
      },
      {
        path: "/get-started",
        element: <GetStarted />,
      },
      {
        path: "/login",
        element: (
          <RedirectPage state="loggedOut">
            <Login />
          </RedirectPage>
        ),
      },

      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "/logout",
      //   element: <LogOut />,
      // },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/sentiment",
        element: <SentimentAnalysis />,
      },
    ],
  },
  {
    path: "therapist",
    element: (
      <RestrictPage state="loggedIn">
        <TherapistPortal />
      </RestrictPage>
    ),
    children: therapistRoutes,
  },
  {
    path: "/patient",
    element: (
      <RestrictPage state="loggedIn">
        <PatientPortal />
      </RestrictPage>
    ),
    children: patientRoutes,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

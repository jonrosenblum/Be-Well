import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import Appointments from "./Components/Pieces/CreateAppointments";
import LogOut from "./Routes/LogOut";
import PatientPortal from "./Routes/PatientPortal";
import { store } from "./Services/store";
import { Provider } from "react-redux";
import MedicalRecords from "./Components/Pieces/MedicalRecords";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import TherapistHome from "./Routes/TherapistHome";
import SentimentAnalysis from "./Components/Pieces/SentimentAnalysis"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/get-started",
        element: <GetStarted />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/develop",
        element: <Develop />,
      },
      {
        path: "/therapist/home",
        element: <TherapistHome />,
      },

      {
        path: "/therapist/portal",
        element: <TherapistPortal />,
      },
      {
        path: "/therapist/appointments",
        element: <Appointments />,
      },
      {
        path: "therapist/medical-records",
        element: <MedicalRecords />,
      },
      {
        path: "therapist/billing",
        element: <Billing />,
      },
      {
        path: "/therapist/settings",
        element: <TherapistSettings />,
      },
      {
        path: "/logout",
        element: <LogOut />,
      },
      {
        path: "/patient/portal",
        element: <PatientPortal />,
      },
      // {
      //   path: '/patient/profile',
      //   element: <TherapistProfile />
      // },
      // {
      //   path: '/patient/settings',
      //   element: <TherapistSettings />
      // }
      {
        path: "/sentiment",
        element: <SentimentAnalysis />
      }
    ],
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

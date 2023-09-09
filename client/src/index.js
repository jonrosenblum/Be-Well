import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Components/Static/Root.js';
import Error from './Components/Static/Error.js';
import HomePage from './Routes/HomePage';
import Services from './Routes/Services';
import Payment from './Routes/Payment';
import GetStarted from './Routes/GetStarted';
import TherapistLogin from './Routes/TherapistLogin';
import PatientLogin from './Routes/PatientLogin';
import About from './Routes/About';
import Contact from './Routes/Contact';
import Account from './Routes/Account';
import Develop from './Routes/Develop';
import TherapistPortal from './Routes/TherapistPortal';
import TherapistProfile from './Routes/TherapistProfile';
import TherapistSettings from './Routes/TherapistSettings';
import LogOut from './Routes/LogOut';
import PatientPortal from './Routes/PatientPortal';






const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/payment',
        element: <Payment />
      },
      {
        path: '/get-started',
        element: <GetStarted />
      },
      {
        path: '/therapist/login',
        element: <TherapistLogin />
      },
      {
        path: '/patient/login',
        element: <PatientLogin />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/account',
        element: <Account />
      },
      {
        path: '/develop',
        element: <Develop />
      },
      {
        path: '/therapist/portal',
        element: <TherapistPortal />
      },
      {
        path: '/therapist/profile',
        element: <TherapistProfile />
      },
      {
        path: '/therapist/settings',
        element: <TherapistSettings />
      },
      {
        path: '/logout',
        element: <LogOut />
      },
      {
        path: '/patient/portal',
        element: <PatientPortal />
      }
      // {
      //   path: '/patient/profile',
      //   element: <TherapistProfile />
      // },
      // {
      //   path: '/patient/settings',
      //   element: <TherapistSettings />
      // }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




reportWebVitals();

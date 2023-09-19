import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthHook } from "../../Services/hooks";
import { useAppDispatch } from '../../Services/hooks';
import {
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';


export default function SideNav() {
  const [slimOpen, setSlimOpen] = useState(true);
  const [slimCollapse1, setSlimCollapse1] = useState(false);
  const [slimCollapse2, setSlimCollapse2] = useState(false);
  const [slimMode, setSlimMode] = useState(true);


  const auth = useAuthHook();
  const navigate = useNavigate();
  const [showLogoutSuccess, setShowLogoutSuccess] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch("/therapist/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      auth.logout()
      setShowLogoutSuccess(true);
      navigate('/');

      setTimeout(() => {
        setShowLogoutSuccess(false);
      }, 3000);

    } catch (error) {
      console.error(error.message);
    }
  };


  useEffect(() => {
    // Clear the success message if it's still showing after some time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setShowLogoutSuccess(false);
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [showLogoutSuccess]);


  return (
    <>
      <MDBSideNav
        backdrop={false}
        isOpen={slimOpen}
        absolute
        slim={slimMode}
        slimCollapsed={!slimCollapse1 && !slimCollapse2}
        getOpenState={(e) => setSlimOpen(e)}
      >
        <MDBSideNavMenu>
          <MDBSideNavItem>
            <MDBSideNavLink onClick={() => { navigate('/therapist/portal') }}>
              <MDBIcon fas icon='home' className='fa-fw me-3' />
              <span className='sidenav-non-slim'>Home</span>
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink icon='angle-down' shouldBeExpanded={slimCollapse1} onClick={() => setSlimCollapse1(!slimCollapse1)}>
              <MDBIcon fas icon='calendar-alt' className='fa-fw me-3' />
              <span className='sidenav-non-slim'>Appointments</span>
            </MDBSideNavLink>
            <MDBSideNavCollapse show={slimCollapse1}>
              <MDBSideNavLink onClick={() => { navigate('/therapist/appointments') }}>My Appointments</MDBSideNavLink>
              <MDBSideNavLink onClick={() => { navigate('/therapist/appointments') }}>Schedule Appointment</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink icon='angle-down' shouldBeExpanded={slimCollapse2} onClick={() => setSlimCollapse2(!slimCollapse2)}>
              <MDBIcon fas icon='user' className='fa-fw me-3' />
              <span className='sidenav-non-slim'>Account</span>
            </MDBSideNavLink>
            <MDBSideNavCollapse show={slimCollapse2}>
              <MDBSideNavLink onClick={() => { navigate('/therapist/billing') }}>Billing</MDBSideNavLink>
              <MDBSideNavLink onClick={() => { navigate('/therapist/settings') }}>Settings</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink onClick={handleLogout}>
              <MDBIcon fas icon='sign-out-alt' className='fa-fw me-3' />
              <span className='sidenav-non-slim'>Logout</span>
            </MDBSideNavLink>
          </MDBSideNavItem>
        </MDBSideNavMenu>
      </MDBSideNav>
      {showLogoutSuccess && (
        <div className="alert alert-success mt-3">
          Logout successful! You have been logged out.
        </div>
      )}

    </>
  );
}

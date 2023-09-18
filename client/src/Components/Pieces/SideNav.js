import React, { useState } from 'react';
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

  const handleLogout = async (title, e) => {
    if (title === 'Logout') {
      e.preventDefault()
    }
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
    } catch (error) {
      console.error(error.message);
    }
  };

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
            <MDBSideNavLink>
              <MDBIcon far icon='smile' className='fa-fw me-3' />
              <span className='sidenav-non-slim'>Home</span>
            </MDBSideNavLink>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink icon='angle-down' shouldBeExpanded={slimCollapse1} onClick={() => setSlimCollapse1(!slimCollapse1)}>
              <MDBIcon fas icon='grin' className='fa-fw me-3' />
              <span className='sidenav-non-slim'>Category 1</span>
            </MDBSideNavLink>
            <MDBSideNavCollapse show={slimCollapse1}>
              <MDBSideNavLink>Link 2</MDBSideNavLink>
              <MDBSideNavLink>Link 3</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
          <MDBSideNavItem>
            <MDBSideNavLink icon='angle-down' shouldBeExpanded={slimCollapse2} onClick={() => setSlimCollapse2(!slimCollapse2)}>
              <MDBIcon fas icon='grin' className='fa-fw me-3' />
              <span className='sidenav-non-slim'>Category 2</span>
            </MDBSideNavLink>
            <MDBSideNavCollapse show={slimCollapse2}>
              <MDBSideNavLink>Link 4</MDBSideNavLink>
              <MDBSideNavLink>Link 5</MDBSideNavLink>
            </MDBSideNavCollapse>
          </MDBSideNavItem>
        </MDBSideNavMenu>
      </MDBSideNav>

    </>
  );
}

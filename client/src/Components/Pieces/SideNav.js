import { MDBIcon, MDBSideNav, MDBSideNavItem, MDBSideNavLink, MDBSideNavMenu } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthHook } from "../../Services/hooks";

export default function SideNav({ children, onCollapse = () => {} }) {
  const [slimOpen, setSlimOpen] = useState(true);

  const [slimMode, setSlimMode] = useState(false);

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

      auth.logout();
      setShowLogoutSuccess(true);
      navigate("/");

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

  const doMouseEnter = () => {
    console.log("doMouseLeave.fired");
    setSlimMode(false);
  };

  const doMouseLeave = () => {
    console.log("doMouseLeave.fired");
    setSlimMode(true);
  };

  return (
    <MDBSideNav
      backdrop={false}
      isOpen={slimOpen}
      absolute
      slim={slimMode}
      getOpenState={(e) => setSlimOpen(e)}
      onMouseEnter={doMouseEnter}
      onMouseLeave={doMouseLeave}
      mode={"side"}
      onCollapse={onCollapse}
    >
      <div className="d-flex flex-column h-100">
        <MDBSideNavMenu className="p-2">
          <MDBSideNavItem>BeWell</MDBSideNavItem>
        </MDBSideNavMenu>

        <hr />
        {children}

        <MDBSideNavMenu className="mt-auto">
          <hr />
          <MDBSideNavItem>
            <MDBSideNavLink onClick={handleLogout}>
              <MDBIcon fas icon="sign-out-alt" className="fa-fw me-3" />
              <span className="sidenav-non-slim">Logout</span>
            </MDBSideNavLink>
          </MDBSideNavItem>
        </MDBSideNavMenu>
      </div>
    </MDBSideNav>
  );
}

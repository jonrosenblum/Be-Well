// import React, { useState } from 'react';
// import {
//   MDBSideNav,
//   MDBSideNavMenu,
//   MDBSideNavItem,
//   MDBSideNavLink,
//   MDBSideNavCollapse,
//   MDBBtn,
//   MDBIcon
// } from 'mdb-react-advanced-pro';

// export default function App() {
//   const [darkOpen, setDarkOpen] = useState(true);
//   const [darkCollapse1, setDarkCollapse1] = useState(true);
//   const [darkCollapse2, setDarkCollapse2] = useState(false);

//   return (
//     <>
//       <MDBSideNav
//         isOpen={darkOpen}
//         color='light'
//         bgColor='dark'
//         absolute
//         getOpenState={(e) => setDarkOpen(e)}
//       >


//         <MDBSideNavMenu>
//           <MDBSideNavItem>
//             <MDBSideNavLink>
//               <MDBIcon far icon='smile' className='fa-fw me-3' />
//               Link 1
//             </MDBSideNavLink>
//           </MDBSideNavItem>
//           <MDBSideNavItem>
//             <MDBSideNavLink icon='angle-down' shouldBeExpanded={darkCollapse1} onClick={() => setDarkCollapse1(!darkCollapse1)}>
//               <MDBIcon fas icon='grin' className='fa-fw me-3' />
//               Category 1
//             </MDBSideNavLink>
//             <MDBSideNavCollapse show={darkCollapse1}>
//               <MDBSideNavLink>Link 2</MDBSideNavLink>
//               <MDBSideNavLink>Link 3</MDBSideNavLink>
//             </MDBSideNavCollapse>
//           </MDBSideNavItem>
//           <MDBSideNavItem>
//             <MDBSideNavLink icon='angle-down' shouldBeExpanded={darkCollapse2} onClick={() => setDarkCollapse2(!darkCollapse2)}>
//               <MDBIcon fas icon='grin' className='fa-fw me-3' />
//               Category 2
//             </MDBSideNavLink>
//             <MDBSideNavCollapse show={darkCollapse2}>
//               <MDBSideNavLink>Link 4</MDBSideNavLink>
//               <MDBSideNavLink>Link 5</MDBSideNavLink>
//             </MDBSideNavCollapse>
//           </MDBSideNavItem>
//         </MDBSideNavMenu>
//       </MDBSideNav>

//       <div style={{ padding: '20px' }} className='text-center'>
//         <MDBBtn onClick={() => setDarkOpen(!darkOpen)}>
//           <MDBIcon fas icon='bars' />
//         </MDBBtn>
//       </div>
//     </>
//   );
// }



import React, { useState } from "react";
import LogoutSuccessAlert from "./LogoutSuccessAlert";
import { useAppDispatch, useAuthHook } from "../../Services/hooks";
import { useNavigate } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../Pieces/SideBarData';
import '../Styles/SideNav.css';
import { IconContext } from 'react-icons';



export default function SideNav() {

  const auth = useAuthHook();
  const [showLogoutSuccess, setShowLogoutSuccess] = useState(false);
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} onClick={(e) => handleLogout(item.title, e)}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      {/* <div className="">
        <ul className="nav flex-column align-items-center">
          <li className="nav-item color-info">
            <a className="nav-link" href="/therapist/portal">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/therapist/medical-records">Medical Records</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/therapist/questionnaires">Questionnaires</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/therapist/appointments">Appointments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/therapist/billing">Billing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/therapist/settings">Settings</a>
          </li>
          <li className="nav-item">
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
          </li>
        </ul >
        {showLogoutSuccess && (
          <LogoutSuccessAlert onClose={() => setShowLogoutSuccess(false)} />
        )
        }
      </div > */}
    </>
  );
}

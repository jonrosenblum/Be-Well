import React, { useState } from 'react';
import {
  MDBSideNav,
  MDBSideNavMenu,
  MDBSideNavItem,
  MDBSideNavLink,
  MDBSideNavCollapse,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  const [slimOpen, setSlimOpen] = useState(true);
  const [slimCollapse1, setSlimCollapse1] = useState(false);
  const [slimCollapse2, setSlimCollapse2] = useState(false);
  const [slimMode, setSlimMode] = useState(true);

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
              <span className='sidenav-non-slim'>Link 1</span>
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

// import React, { useState } from 'react';
// import {
//   MDBSideNav,
//   MDBSideNavMenu,
//   MDBSideNavItem,
//   MDBSideNavLink,
//   MDBSideNavCollapse,
//   MDBBtn,
//   MDBIcon
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [basicOpen, setBasicOpen] = useState(true);
//   const [basicCollapse1, setBasicCollapse1] = useState(true);
//   const [basicCollapse2, setBasicCollapse2] = useState(false);

//   return (
//     <>
//       <MDBSideNav isOpen={basicOpen} absolute getOpenState={(e) => setBasicOpen(e)}>
//         <MDBSideNavMenu>
//           <MDBSideNavItem>
//             <MDBSideNavLink>
//               <MDBIcon far icon='smile' className='fa-fw me-3' />
//               Link 1
//             </MDBSideNavLink>
//           </MDBSideNavItem>
//           <MDBSideNavItem>
//             <MDBSideNavLink icon='angle-down' shouldBeExpanded={basicCollapse1} onClick={() => setBasicCollapse1(!basicCollapse1)}>
//               <MDBIcon fas icon='grin' className='fa-fw me-3' />
//               Category 1
//             </MDBSideNavLink>
//             <MDBSideNavCollapse show={basicCollapse1}>
//               <MDBSideNavLink>Link 2</MDBSideNavLink>
//               <MDBSideNavLink>Link 3</MDBSideNavLink>
//             </MDBSideNavCollapse>
//           </MDBSideNavItem>
//           <MDBSideNavItem>
//             <MDBSideNavLink icon='angle-down' shouldBeExpanded={basicCollapse2} onClick={() => setBasicCollapse2(!basicCollapse2)}>
//               <MDBIcon fas icon='grin' className='fa-fw me-3' />
//               Category 2
//             </MDBSideNavLink>
//             <MDBSideNavCollapse show={basicCollapse2}>
//               <MDBSideNavLink>Link 4</MDBSideNavLink>
//               <MDBSideNavLink>Link 5</MDBSideNavLink>
//             </MDBSideNavCollapse>
//           </MDBSideNavItem>
//         </MDBSideNavMenu>
//       </MDBSideNav>

//       <div style={{ padding: '20px' }} className=''>
//         <MDBBtn onClick={() => setBasicOpen(!basicOpen)}>
//           <MDBIcon fas icon='bars' />
//         </MDBBtn>
//       </div>
//     </>
//   );
// }
// import React, { useState, useCallback, useEffect } from 'react';
// import {
//   MDBSideNav,
//   MDBSideNavMenu,
//   MDBSideNavItem,
//   MDBSideNavLink,
//   MDBSideNavCollapse,
//   MDBIcon,
//   MDBContainer,
//   MDBNavbar,
//   MDBInput,
//   MDBInputGroup,
//   MDBNavbarToggler,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBDropdown,
//   MDBDropdownToggle,
//   MDBDropdownMenu,
//   MDBDropdownItem,
//   MDBBadge,
//   MDBCollapse,
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [collapseOpened, setCollapseOpened] = useState('accordionCollapse1');
//   const [basicOpen, setBasicOpen] = useState(true);
//   const [mode, setMode] = useState('side');
//   const [showBasic, setShowBasic] = useState(false);

//   const toggleAccordion = (value: string) => {
//     value !== collapseOpened ? setCollapseOpened(value) : setCollapseOpened('');
//   };

//   const handleResize = useCallback(() => {
//     if (!window.matchMedia('screen and (min-width: 1400px)').matches) {
//       setMode('side');
//       return setBasicOpen(false);
//     }

//     setMode('push');
//     return setBasicOpen(true);
//   }, []);

//   useEffect(() => {
//     handleResize();
//   }, [handleResize]);

//   useEffect(() => {
//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [handleResize]);

//   return (
//     <header>
//       <MDBSideNav backdrop={false} mode={mode} isOpen={basicOpen} getOpenState={setBasicOpen}>
//         <div className='d-flex justify-content-center py-4'>
//           <img
//             id='MDB-logo'
//             src='https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.webp'
//             alt='MDB Logo'
//             draggable='false'
//           />
//         </div>
//         <MDBSideNavMenu>
//           <MDBSideNavItem>
//             <MDBSideNavLink>
//               <MDBIcon icon='chart-area' className='fa-fw me-3' />
//               Website traffic
//             </MDBSideNavLink>
//           </MDBSideNavItem>
//           <MDBSideNavItem>
//             <MDBSideNavLink
//               icon='angle-down'
//               shouldBeExpanded={collapseOpened === 'accordionCollapse1'}
//               onClick={() => toggleAccordion('accordionCollapse1')}
//             >
//               <MDBIcon icon='cogs' className='fa-fw me-3' />
//               Settings
//             </MDBSideNavLink>
//             <MDBSideNavCollapse id='accordionCollapse1' show={collapseOpened === 'accordionCollapse1'}>
//               <MDBSideNavLink>Profile</MDBSideNavLink>
//               <MDBSideNavLink>Account</MDBSideNavLink>
//             </MDBSideNavCollapse>
//           </MDBSideNavItem>
//           <MDBSideNavItem>
//             <MDBSideNavLink
//               icon='angle-down'
//               shouldBeExpanded={collapseOpened === 'accordionCollapse2'}
//               onClick={() => toggleAccordion('accordionCollapse2')}
//             >
//               <MDBIcon icon='lock' className='fa-fw me-3' />
//               Password
//             </MDBSideNavLink>
//             <MDBSideNavCollapse id='accordionCollapse2' show={collapseOpened === 'accordionCollapse2'}>
//               <MDBSideNavLink>Request password</MDBSideNavLink>
//               <MDBSideNavLink>Reset password</MDBSideNavLink>
//             </MDBSideNavCollapse>
//           </MDBSideNavItem>
//         </MDBSideNavMenu>
//       </MDBSideNav>

//       <MDBNavbar fixed='top' expand='lg' id='main-navbar'>
//         <MDBContainer fluid>
//           <MDBNavbarToggler
//             aria-controls='navbarSupportedContent'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//             onClick={() => setShowBasic(!showBasic)}
//           >
//             <MDBIcon icon='bars' fas />
//           </MDBNavbarToggler>

//           <MDBInputGroup className='d-none d-md-flex my-auto'>
//             <MDBInput label='Search (ctrl + "/" to focus)' />
//             <MDBIcon className='my-auto ms-2' icon='search' />
//           </MDBInputGroup>

//           <MDBCollapse navbar show={showBasic}>
//             <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
//               <MDBNavbarItem>
//                 <MDBDropdown>
//                   <MDBDropdownToggle tag='a' className='nav-link text-dark'>
//                     <MDBIcon icon='bell' />
//                     <MDBBadge notification color='danger' pill>
//                       1
//                     </MDBBadge>
//                   </MDBDropdownToggle>
//                   <MDBDropdownMenu>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>Action</MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>Another action</MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>Something else here</MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                   </MDBDropdownMenu>
//                 </MDBDropdown>
//               </MDBNavbarItem>
//               <MDBNavbarItem className='mx-3 me-lg-0 my-auto'>
//                 <MDBIcon icon='fill-drip' />
//               </MDBNavbarItem>
//               <MDBNavbarItem className='ms-3 me-lg-0 my-auto'>
//                 <MDBIcon fab icon='github' />
//               </MDBNavbarItem>
//               <MDBNavbarItem className='ms-3'>
//                 <MDBDropdown>
//                   <MDBDropdownToggle tag='a' className='nav-link'>
//                     <i className='flag flag-united-kingdom'></i>
//                   </MDBDropdownToggle>
//                   <MDBDropdownMenu>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>
//                         {' '}
//                         <i className='flag-united-kingdom flag'></i>English
//                         <MDBIcon icon='check' className='text-success ms-2' />
//                       </MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>
//                         <i className='flag flag-poland'></i>Polski
//                       </MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>
//                         <i className='flag flag-china'></i>中文
//                       </MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>
//                         <i className='flag flag-japan'></i>日本語
//                       </MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>
//                         <i className='flag flag-germany'></i>Deutsch
//                       </MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>
//                         <i className='flag flag-france'></i>Français
//                       </MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>
//                         <i className='flag flag-spain'></i>Español
//                       </MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>
//                         <i className='flag flag-russia'></i>Русский
//                       </MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>
//                         <i className='flag flag-portugal'></i>Português
//                       </MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                   </MDBDropdownMenu>
//                 </MDBDropdown>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBDropdown>
//                   <MDBDropdownToggle tag='a' className='nav-link'>
//                     <img
//                       src='https://mdbootstrap.com/img/Photos/Avatars/img (31).webp'
//                       className='rounded-circle'
//                       height='22'
//                       alt=''
//                       loading='lazy'
//                     />
//                   </MDBDropdownToggle>
//                   <MDBDropdownMenu>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>My profile</MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>Settings</MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                     <MDBDropdownItem>
//                       {/* <MDBDropdownLink>Logout</MDBDropdownLink> */}
//                     </MDBDropdownItem>
//                   </MDBDropdownMenu>
//                 </MDBDropdown>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     </header>
//   );
// }


// import React, { useState } from "react";
// import LogoutSuccessAlert from "./LogoutSuccessAlert";
// import { useAppDispatch, useAuthHook } from "../../Services/hooks";
// import { useNavigate } from 'react-router-dom'
// import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { SidebarData } from '../Pieces/SideBarData';
// import '../Styles/SideNav.css';
// import { IconContext } from 'react-icons';



// export default function SideNav() {

//   const auth = useAuthHook();
//   const [showLogoutSuccess, setShowLogoutSuccess] = useState(false);
//   const navigate = useNavigate();
//   const [sidebar, setSidebar] = useState(false);

//   const showSidebar = () => setSidebar(!sidebar);

//   const handleLogout = async (title, e) => {
//     if (title === 'Logout') {
//       e.preventDefault()
//     }
//     try {
//       const response = await fetch("/therapist/logout", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Logout failed");
//       }

//       auth.logout()
//       setShowLogoutSuccess(true);
//       navigate('/');
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   return (
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>
//         <div className='navbar'>
//           <Link to='#' className='menu-bars'>
//             <FaIcons.FaBars onClick={showSidebar} />
//           </Link>
//         </div>
//         <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
//           <ul className='nav-menu-items' onClick={showSidebar}>
//             <li className='navbar-toggle'>
//               <Link to='#' className='menu-bars'>
//                 <AiIcons.AiOutlineClose />
//               </Link>
//             </li>
//             {SidebarData.map((item, index) => {
//               return (
//                 <li key={index} className={item.cName}>
//                   <Link to={item.path} onClick={(e) => handleLogout(item.title, e)}>
//                     {item.icon}
//                     <span>{item.title}</span>
//                   </Link>
//                 </li>
//               );
//             })}
//           </ul>
//         </nav>
//       </IconContext.Provider>
//       {/* <div className="">
//         <ul className="nav flex-column align-items-center">
//           <li className="nav-item color-info">
//             <a className="nav-link" href="/therapist/portal">Dashboard</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/therapist/medical-records">Medical Records</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/therapist/questionnaires">Questionnaires</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/therapist/appointments">Appointments</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/therapist/billing">Billing</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/therapist/settings">Settings</a>
//           </li>
//           <li className="nav-item">
//             <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
//           </li>
//         </ul >
//         {showLogoutSuccess && (
//           <LogoutSuccessAlert onClose={() => setShowLogoutSuccess(false)} />
//         )
//         }
//       </div > */}
//     </>
//   );
// }

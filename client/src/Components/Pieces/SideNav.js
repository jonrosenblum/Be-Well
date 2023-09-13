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
  const dispatch = useAppDispatch();
  const auth = useAuthHook();
  const [showLogoutSuccess, setShowLogoutSuccess] = useState(false);
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

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

      dispatch(auth.actions.logout());
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
                  <Link to={item.path}>
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

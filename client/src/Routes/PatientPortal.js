import { MDBCol, MDBContainer, MDBIcon, MDBSideNavCollapse, MDBSideNavItem, MDBSideNavLink, MDBSideNavMenu } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideNav from "../Components/Pieces/SideNav";



export default function PatientPortal() {
    const [slimCollapse1, setSlimCollapse1] = useState(false);
    const [slimCollapse2, setSlimCollapse2] = useState(false);


    const navigate = useNavigate();



    const doClose = () => {
        setSlimCollapse1(false);
        setSlimCollapse2(false)
    }
    return (
        <div>
            <SideNav onCollapse={doClose}>
                <MDBSideNavMenu>
                    <MDBSideNavItem>
                        <MDBSideNavLink onClick={() => { navigate('/patient/portal') }}>
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
                            <MDBSideNavLink onClick={() => { navigate('/patient/appointments') }}>My Appointments</MDBSideNavLink>
                            <MDBSideNavLink onClick={() => { navigate('/patient/appointments') }}>Schedule Appointment</MDBSideNavLink>
                        </MDBSideNavCollapse>
                    </MDBSideNavItem>
                    <MDBSideNavItem>
                        <MDBSideNavLink icon='angle-down' shouldBeExpanded={slimCollapse2} onClick={() => setSlimCollapse2(!slimCollapse2)}>
                            <MDBIcon fas icon='user' className='fa-fw me-3' />
                            <span className='sidenav-non-slim'>Account</span>
                        </MDBSideNavLink>
                        <MDBSideNavCollapse show={slimCollapse2}>
                            <MDBSideNavLink onClick={() => { navigate('/patient/billing') }}>Billing</MDBSideNavLink>
                            <MDBSideNavLink onClick={() => { navigate('/patient/settings') }}>Settings</MDBSideNavLink>
                        </MDBSideNavCollapse>
                    </MDBSideNavItem>

                </MDBSideNavMenu>
            </SideNav>


            <MDBContainer className="portal-container">
                <MDBCol>
                    <Outlet />
                </MDBCol>
            </MDBContainer>
        </div >
    )
}

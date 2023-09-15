import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export default function PortalCards() {
  return (
    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Consultant</p>
            <p className='text-muted mb-0'>Finance</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Onboarding
            </MDBBadge>
          </td>
          <td>Junior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Designer</p>
            <p className='text-muted mb-0'>UI/UX</p>
          </td>
          <td>
            <MDBBadge color='warning' pill>
              Awaiting
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
            <MDBBtn color='link' rounded size='sm'>
              Edit
            </MDBBtn>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
  );
}



// import React from "react";
// import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBContainer } from "mdb-react-ui";
// import placeholderimage from "./Assets/placeholder.png";
// import "../Styles/PatientFlipCard.css";

// export default function PortalCards() {
//     return (
//         <>
        
//         </>
//     )
// // <MDBContainer>
// //     <MDBRow className="row-cols-1 row-cols-md-3 g-4">
// //         <MDBCol>
// //             <MDBCard className="h-100">
// //                 <img src={placeholderimage} className="card-img-top" alt="" />
// //                 <MDBCardBody>
// //                     <MDBCardTitle>Card title</MDBCardTitle>
// //                     <MDBCardText>
// //                         This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
// //                     </MDBCardText>
// //                 </MDBCardBody>
// //                 <MDBCardFooter>
// //                     <small className="text-muted">Last updated 3 mins ago</small>
// //                 </MDBCardFooter>
// //             </MDBCard>
// //         </MDBCol>
// //         <MDBCol>
// //             <MDBCard className="h-100">
// //                 <img src={placeholderimage} className="card-img-top" alt="" />
// //                 <MDBCardBody>
// //                     <MDBCardTitle>Card title</MDBCardTitle>
// //                     <MDBCardText>This card has supporting text below as a natural lead-in to additional content.</MDBCardText>
// //                 </MDBCardBody>
// //                 <MDBCardFooter>
// //                     <small className="text-muted">Last updated 3 mins ago</small>
// //                 </MDBCardFooter>
// //             </MDBCard>
// //         </MDBCol>
// //         <MDBCol>
// //             <MDBCard className="h-100">
// //                 <img src={placeholderimage} className="card-img-top" alt="" />
// //                 <MDBCardBody>
// //                     <MDBCardTitle>Card title</MDBCardTitle>
// //                     <MDBCardText>
// //                         This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
// //                     </MDBCardText>
// //                 </MDBCardBody>
// //                 <MDBCardFooter>
// //                     <small className="text-muted">Last updated 3 mins ago</small>
// //                 </MDBCardFooter>
// //             </MDBCard>
// //         </MDBCol>
// //     </MDBRow>
// // </MDBContainer>
// //     );
// // }

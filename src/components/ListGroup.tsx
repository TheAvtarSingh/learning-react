import { MouseEvent } from "react";

export default function ListGroups() {
  let projects = [
    "WEAPPL - Weather Mobile Application with REST API",
    "Student Result Management System - MERN Stack",
    "Catelog Mobile Application - Flutter",
    "Hotel Booking Website - Travelling Project",
    "Toyshop Ecommerce Web Application - MEAN STACK",
  ];

  // Conditional Rendering
  // projects =[];

  /* const getMessage = () => {
    return projects.length === 0 ? <p>No Items Found</p> : null;
} */

const handleClick = (event:MouseEvent) => {
    console.log(event);
  }

  return (
    <>
      <h1>List</h1>
      {/* {getMessage()} */}
      {projects.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {projects.map((projects, index) => (
          <li
            key={projects}
            onClick={handleClick}
            className="list-group-item"
          >
            {projects}
          </li>
        ))}
        {/* <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li> */}
      </ul>
    </>
  );
}

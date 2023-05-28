export default function ListGroups() {
const projects = ["WEAPPL - Weather Mobile Application with REST API","Student Result Management System - MERN Stack","Catelog Mobile Application - Flutter","Hotel Booking Website - Travelling Project","Toyshop Ecommerce Web Application - MEAN STACK"];

  return (
    <>
        <h1>List</h1>
        <ul className="list-group">
            {projects.map((projects)=>(
                <li key={projects} className="list-group-item">{projects}</li>
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

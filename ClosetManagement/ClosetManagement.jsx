// eslint-disable-next-line no-unused-vars
import React from "react";
import "./ClosetManagement.scss";

function ClosetManagement() {
  return (
    <div className="closet-management">
      <h1 className="closetmanagement-heading">Closet Management</h1>
      <div className="closet-container">
        <div className="closet-column">
          <div className="closet-card">
            <h2><i className='bx bxs-t-shirt'></i></h2>
            <h3>Add Clothes</h3>
          </div>
          <div className="closet-card">
            <h2><i className='bx bx-donate-heart' ></i></h2>
            <h3>Garment Care</h3>
          </div>
        </div>
        <div className="closet-column">
          <div className="closet-card">
            <h2><i className='bx bx-closet'></i></h2>
            <h3>Closet</h3>
          </div>
          <div className="closet-card">
            <h2><i className='bx bx-qr-scan'></i></h2>
            <h3>StyleScan</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClosetManagement;

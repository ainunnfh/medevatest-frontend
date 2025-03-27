import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <nav
      className="navbar bg-white shadow-sm px-3 position-fixed top-0 w-100"
      style={{ zIndex: 1030, height: "60px" }}
    >
      <div className="container-fluid d-flex align-items-center">
        <div className="col d-flex align-items-center fw-bold">
          Klinik Training
        </div>

        <div className="col text-center fw-bold">Medeva✨</div>

        <div className="col d-flex justify-content-end align-items-center gap-3">
          <IoMdNotificationsOutline className="fs-4 text-secondary" />

          <div className="d-flex align-items-center gap-2">
            <div className="text-secondary">
              <div className="fw-semibold">Nama User</div>
              <div className="small">Role User</div>
            </div>
            <img
              src={`https://randomuser.me/api/portraits/men/${Math.floor(
                Math.random() * 100
              )}.jpg`}
              alt="User"
              className="rounded-circle"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

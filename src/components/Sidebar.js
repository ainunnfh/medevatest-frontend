import React from "react";
import { AiOutlineLineChart } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { LuBookPlus } from "react-icons/lu";
import { RiStethoscopeLine } from "react-icons/ri";
import { PiCashRegister } from "react-icons/pi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { IoFileTrayFullOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";

const Sidebar = ({ children }) => {
  return (
    <>
      <div
        className="bg-white shadow-lg position-fixed start-0 top-0 min-vh-100 d-flex flex-column justify-content-around align-items-center pt-4 px-3"
        style={{ width: "110px", marginTop: "60px", paddingBottom: "20px" }}
      >
        <div className="text-center">
          <AiOutlineLineChart className="fs-4" />
          <div className="d-none d-md-block">Dashboard</div>
        </div>
        <div className="text-center">
          <SlPeople className="fs-4" />
          <div className="d-none d-md-block">Pasien</div>
        </div>
        <div className="text-center">
          <LuBookPlus className="fs-4" />
          <div className="d-none d-md-block">Kunjungan</div>
        </div>
        <div className="text-center">
          <RiStethoscopeLine className="fs-4" />
          <div className="d-none d-md-block">Pelayanan</div>
        </div>
        <div className="text-center">
          <PiCashRegister className="fs-4" />
          <div className="d-none d-md-block">Kasir</div>
        </div>
        <div className="text-center">
          <MdOutlineMedicalServices className="fs-4" />
          <div className="d-none d-md-block">Farmasi</div>
        </div>
        <div className="text-center">
          <IoFileTrayFullOutline className="fs-4" />
          <div className="d-none d-md-block">Inventory</div>
        </div>
        <div className="text-center">
          <BsCart2 className="fs-4" />
          <div className="d-none d-md-block">Purchasing</div>
        </div>
        <div className="text-center">
          <IoIosSettings className="fs-4" />
          <div className="d-none d-md-block">Setting</div>
        </div>
      </div>
      <div
        className="p-4"
        style={{ marginLeft: "110px", marginTop: "60px", width: "90%" }}
      >
        {children}
      </div>
    </>
  );
};

export default Sidebar;

import React from "react";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Dropdown,
  InputGroup,
  Table,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsThreeDotsVertical, BsSearch, BsArrowRight } from "react-icons/bs";
import { FaPlus, FaCopy } from "react-icons/fa";

const EmployeeData = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("AKTIF");

  const employees = [
    { id: 1, name: "Guntoro Putra Wibowo", role: "Perawat", status: "Aktif" },
    { id: 2, name: "asadsad", role: "Lainnya", status: "Aktif" },
    { id: 3, name: "as@as!1", role: "Lainnya", status: "Aktif" },
    { id: 4, name: "Fifi Cantik", role: "Perawat", status: "Aktif" },
    { id: 5, name: "Kemei Alkaline", role: "Lainnya", status: "Aktif" },
  ];

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "SEMUA" ||
        employee.status.toUpperCase() === statusFilter)
  );
  return (
    <div
      className="container mt-4 p-4 bg-white shadow rounded"
      style={{ maxWidth: "600px" }}
    >
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold">DATA KARYAWAN & TENAGA KESEHATAN</h6>
        <Dropdown>
          <Dropdown.Toggle variant="light" className="border">
            <BsThreeDotsVertical />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item href="#">
              <FaPlus className="me-2 text-secondary" /> Tambah Karyawan
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <FaCopy className="me-2 text-secondary" /> Salin Data Karyawan
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Dropdown Filter Karyawan */}
      <Form.Select className="mb-3">
        <option>Semua Karyawan</option>
      </Form.Select>

      {/* Filter Status */}
      <div className="btn-group w-100 mb-3 border">
        {["SEMUA", "AKTIF", "NON-AKTIF"].map((s) => (
          <Button
            key={s}
            variant={statusFilter === s ? "white" : "light"}
            className={
              statusFilter === s ? "fw-bold" : "fw-bold text-secondary"
            }
            onClick={() => setStatusFilter(s)}
          >
            {s}
          </Button>
        ))}
      </div>

      {/* Input Pencarian */}
      <InputGroup className="mb-3">
        <InputGroup.Text>
          <BsSearch />
        </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Pencarian"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      <div className="container-fluid mt-3">
        <div className="table-responsive">
          <Table hover bordered className="align-middle">
            <thead className="bg-light">
              <tr>
                <th>#</th>
                <th>Karyawan / Tenaga Kesehatan</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees.length === 0 ? (
                <tr>
                  <td className="text-center" colSpan={3}>
                    <div className="text-muted">Tidak ada data</div>
                  </td>
                </tr>
              ) : (
                filteredEmployees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="text-center">{employee.id}</td>
                    <td>
                      <div className="fw-bold">{employee.name}</div>
                      <div className="text-muted">{employee.role}</div>
                      <span className="badge bg-success mt-1">
                        {employee.status}
                      </span>
                    </td>
                    <td
                      className="text-center align-middle"
                      style={{ verticalAlign: "middle" }}
                    >
                      <div className="d-flex justify-content-center align-items-center">
                        <Button
                          className="rounded-circle d-flex align-items-center justify-content-center"
                          style={{
                            width: "40px",
                            height: "40px",
                            padding: "0",
                            backgroundColor: "#6eaff9",
                            borderColor: "#6eaff9",
                          }}
                        >
                          <BsArrowRight size={18} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeData;

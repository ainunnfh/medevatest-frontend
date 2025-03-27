import React, { useState, useEffect } from "react";
import { Form, Button, Dropdown, InputGroup, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsThreeDotsVertical, BsSearch, BsArrowRight } from "react-icons/bs";
import { FaPlus, FaCopy } from "react-icons/fa";
import axios from "axios";

const EmployeeData = ({ onAddEmployee }) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("AKTIF");
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/employee");

      const formattedData = response.data.map((emp) => ({
        ...emp,
        status: emp.contract_end_date ? "NON-AKTIF" : "AKTIF",
      }));

      setEmployees(formattedData);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const filteredEmployees = employees.filter((emp) => {
    const status = statusFilter === "SEMUA" || emp.status === statusFilter;
    const searched =
      emp.full_name?.toLowerCase().includes(search.toLowerCase()) ||
      emp.tipe?.toLowerCase().includes(search.toLowerCase());

    return status && searched;
  });

  return (
    <div
      className="container mt-4 p-4 bg-white shadow rounded"
      style={{ maxWidth: "600px" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="fw-bold">DATA KARYAWAN & TENAGA KESEHATAN</h6>
        <Dropdown>
          <Dropdown.Toggle variant="light" className="border">
            <BsThreeDotsVertical />
          </Dropdown.Toggle>
          <Dropdown.Menu align="end">
            <Dropdown.Item onClick={onAddEmployee}>
              <FaPlus className="me-2 text-secondary" /> Tambah Karyawan
            </Dropdown.Item>
            <Dropdown.Item href="#">
              <FaCopy className="me-2 text-secondary" /> Salin Data Karyawan
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <Form.Select className="mb-3">
        <option>Semua Karyawan</option>
      </Form.Select>
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
                    <td className="text-center">
                      {employees.indexOf(employee) + 1}
                    </td>
                    <td>
                      <div className="fw-bold">{employee.full_name}</div>
                      <div
                        className="text-secondary"
                        style={{ fontSize: "smaller" }}
                      >
                        {employee.tipe}
                      </div>
                      <span className="badge bg-success mt-1">
                        {employee.status[0].toUpperCase() +
                          employee.status?.slice(1).toLowerCase()}
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

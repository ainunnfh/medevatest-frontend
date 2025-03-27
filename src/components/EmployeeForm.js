import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const EmployeeForm = () => {
  const initialFormData = {
    full_name: "",
    nik: "",
    gender: "",
    place_of_birth: "",
    date_of_birth: "",
    phone: "",
    province: "",
    subdistrict: "",
    district: "",
    regency: "",
    address: "",
    username: "",
    email: "",
    password: "",
    tipe: [],
    contract_start_date: "",
    contract_end_date: "",
    marital_status: "",
    bpjs_doctor_code: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        tipe: checked
          ? [...prev.tipe, value]
          : prev.tipe.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      tipe: e.target.value,
      type_other: e.target.value === "Lainnya" ? prev.type_other : "",
    }));
  };

  const handleOtherInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      type_other: e.target.value,
    }));
  };

  const formatDate = (date) => {
    if (!date || date.trim() === "") return null;
    return new Date(date).toISOString().split("T")[0]; // Format YYYY-MM-DD
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formattedData = {
      ...formData,
      date_of_birth: formatDate(formData.date_of_birth),
      contract_start_date: formatDate(formData.contract_start_date),
      contract_end_date: formatDate(formData.contract_end_date),
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/employee",
        formattedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
        setFormData(initialFormData)
      );

      alert("Data berhasil disimpan!");
    } catch (error) {
      alert("Terjadi kesalahan saat menyimpan data");
    }
  };

  return (
    <Container fluid className="p-4">
      <h6 className="mb-4">FORM TAMBAH KARYAWAN</h6>
      <Form onSubmit={handleSubmit}>
        <Row>
          {/* Left Column */}
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="full_name">Nama Lengkap</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Lengkap"
                id="full_name"
                name="full_name"
                value={formData.full_name || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="nik">No. Kartu Identitas</Form.Label>
              <Form.Control
                type="text"
                placeholder="No. Kartu Identitas"
                id="nik"
                name="nik"
                value={formData.nik || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Jenis Kelamin</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Laki-laki"
                  name="gender"
                  id="laki-laki"
                  value={"Laki-laki"}
                  onChange={handleChange}
                  autoComplete="off"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Perempuan"
                  id="perempuan"
                  name="gender"
                  value={"Perempuan"}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="place_of_birth">Tempat Lahir</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tempat Lahir"
                id="place_of_birth"
                name="place_of_birth"
                value={formData.place_of_birth || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="date_of_birth">Tanggal Lahir</Form.Label>
              <Form.Control
                type="date"
                placeholder="Tanggal Lahir"
                value={formData.date_of_birth || ""}
                name="date_of_birth"
                id="date_of_birth"
                onChange={(e) =>
                  setFormData({ ...formData, date_of_birth: e.target.value })
                }
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="phone">No. Telepon</Form.Label>
              <Form.Control
                type="text"
                placeholder="No. Telepon"
                id="phone"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="province">Provinsi</Form.Label>
                  <Form.Select
                    value={formData.province}
                    id="province"
                    name="province"
                    onChange={handleChange}
                    autoComplete="off"
                  >
                    <option>Pilih Provinsi</option>
                    <option value="Jawa Barat">Jawa Barat</option>
                    <option value="Jawa Tengah">Jawa Tengah</option>
                    <option value="Jawa Timur">Jawa Timur</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="regency">Kota / Kabupaten</Form.Label>
                  <Form.Select
                    value={formData.regency}
                    id="regency"
                    name="regency"
                    onChange={handleChange}
                    autoComplete="off"
                  >
                    <option>Pilih Kota/Kabupaten</option>
                    <option value="Kota Bogor">Kota Bogor</option>
                    <option value="Semarang">Semarang</option>
                    <option value="Surabaya">Surabaya</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="subdistrict">Kecamatan</Form.Label>
                  <Form.Select
                    value={formData.subdistrict}
                    id="subdistrict"
                    name="subdistrict"
                    onChange={handleChange}
                    autoComplete="off"
                  >
                    <option>Pilih Kecamatan</option>
                    <option value="Burneh">Burneh</option>
                    <option value="Tunjung">Tunjung</option>
                    <option value="Citereup">Citereup</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="district">Kelurahan</Form.Label>
                  <Form.Select
                    value={formData.district}
                    name="district"
                    id="district"
                    onChange={handleChange}
                    autoComplete="off"
                  >
                    <option>Pilih Kelurahan</option>
                    <option value="Cileungsi">Cileungsi</option>
                    <option value="Jendral Sudirman">Jendral Sudirman</option>
                    <option value="Kebun Jeruk">Kebun Jeruk</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="address">Detil Alamat</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Alamat"
                name="address"
                id="address"
                value={formData.address || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>
          </Col>

          {/* Right Column */}
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="username">Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                id="username"
                value={formData.username || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={formData.password || ""}
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Type</Form.Label>
              <Row>
                <Col>
                  {[
                    "Manager",
                    "Admin",
                    "Resepsionis",
                    "Manajemen",
                    "Finance",
                    "Purchasing",
                  ].map((type) => (
                    <Form.Check
                      key={type}
                      type="checkbox"
                      label={type}
                      name="tipe"
                      value={type}
                      onChange={handleChange}
                    />
                  ))}
                </Col>

                <Col>
                  {["Perawat", "Bidan", "Dokter"].map((type) => (
                    <Form.Check
                      key={type}
                      type="radio"
                      label={type}
                      name="tipe"
                      value={type}
                      checked={formData.tipe.includes(type)}
                      onChange={handleRadioChange}
                    />
                  ))}
                  <Form.Check
                    type="radio"
                    id="lainnya"
                    label="Lainnya"
                    name="tipe_radio"
                    value="Lainnya"
                    checked={formData.tipe === "Lainnya"}
                    onChange={handleRadioChange}
                    autoComplete="off"
                  />
                  {formData.tipe === "Lainnya" && (
                    <Form.Control
                      type="text"
                      placeholder="Masukkan tipe lainnya"
                      name="type_other"
                      className="mt-2"
                      value={formData.type_other || ""}
                      onChange={handleOtherInputChange}
                      autoComplete="off"
                    />
                  )}
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="contract_start_date">
                Tanggal Mulai Kontrak
              </Form.Label>
              <Form.Control
                type="date"
                id="contract_start_date"
                name="contract_start_date"
                value={formData.contract_start_date || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contract_start_date: e.target.value,
                  })
                }
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="contract_end_date">
                Tanggal Selesai Kontrak
              </Form.Label>
              <Form.Control
                type="date"
                name="contract_end_date"
                id="contract_end_date"
                value={formData.contract_end_date || ""}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contract_end_date: e.target.value,
                  })
                }
                autoComplete="off"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="marital_status">Status Menikah</Form.Label>
              <Form.Select
                name="marital_status"
                id="marital_status"
                value={formData.marital_status || ""}
                onChange={handleChange}
                autoComplete="off"
              >
                <option>Pilih Status</option>
                <option value={"Lajang"}>Lajang</option>
                <option value={"Menikah"}>Menikah</option>
                <option value={"Cerai"}>Cerai</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="bpjs_doctor_code">
                Kode Dokter BPJS
              </Form.Label>
              <Form.Select
                name="bpjs_doctor_code"
                id="bpjs_doctor_code"
                value={formData.bpjs_doctor_code || ""}
                onChange={handleChange}
                autoComplete="off"
              >
                <option>Pilih Kode Dokter</option>
                <option value="A1">A1</option>
                <option value="B2">B2</option>
                <option value="C3">C3</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <div className="text-end">
          <Button variant="primary" size="lg" type="submit">
            Simpan
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EmployeeForm;

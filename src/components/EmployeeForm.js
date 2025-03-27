import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EmployeeForm = () => {
  return (
    <Container fluid className="p-4">
      <h6 className="mb-4">FORM TAMBAH KARYAWAN</h6>
      <Form>
        <Row>
          {/* Left Column */}
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Nama Lengkap</Form.Label>
              <Form.Control type="text" placeholder="Nama Lengkap" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>No. Kartu Identitas</Form.Label>
              <Form.Control type="text" placeholder="No. Kartu Identitas" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Jenis Kelamin</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Laki-laki"
                  name="gender"
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Perempuan"
                  name="gender"
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tempat Lahir</Form.Label>
              <Form.Control type="text" placeholder="Tempat Lahir" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tanggal Lahir</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>No. Telepon</Form.Label>
              <Form.Control type="text" placeholder="No. Telepon" />
            </Form.Group>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Provinsi</Form.Label>
                  <Form.Select>
                    <option>Pilih Provinsi</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Kota / Kabupaten</Form.Label>
                  <Form.Select>
                    <option>Pilih Kota/Kabupaten</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Kecamatan</Form.Label>
                  <Form.Select>
                    <option>Pilih Kecamatan</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Kelurahan</Form.Label>
                  <Form.Select>
                    <option>Pilih Kelurahan</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Detil Alamat</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Alamat" />
            </Form.Group>
          </Col>

          {/*  Right Column */}
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tipe</Form.Label>
              <Row>
                <Col>
                  <Form.Check type="checkbox" label="Manager" />
                  <Form.Check type="checkbox" label="Admin" />
                  <Form.Check type="checkbox" label="Resepsionis" />
                  <Form.Check type="checkbox" label="Manajemen" />
                  <Form.Check type="checkbox" label="Finance" />
                  <Form.Check type="checkbox" label="Kasir" />
                  <Form.Check type="checkbox" label="Purchasing" />
                </Col>
                <Col>
                  <Form.Check type="radio" label="Perawat" name="category" />
                  <Form.Check type="radio" label="Bidan" name="category" />
                  <Form.Check type="radio" label="Dokter" name="category" />
                  <Form.Check type="radio" label="Lainnya" name="category" />
                  <Form.Control
                    type="text"
                    placeholder="Lainnya"
                    className="mt-2"
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tanggal Mulai Kontrak</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tanggal Selesai Kontrak</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Status Menikah</Form.Label>
              <Form.Select>
                <option>Pilih Status</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Kode Dokter BPJS</Form.Label>
              <Form.Select>
                <option>Pilih Kode Dokter</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <div className="text-end">
          <Button variant="primary" size="lg">
            Simpan
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default EmployeeForm;

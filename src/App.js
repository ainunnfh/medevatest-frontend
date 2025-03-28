import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import EmployeeData from "./components/EmployeeData";
import EmployeeForm from "./components/EmployeeForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  return (
    <>
      <Navbar />
      <Sidebar>
        <Container fluid>
          <Row>
            <Col md={5} sm={12} className="mb-3">
              <EmployeeData
                onAddEmployee={() => {
                  setSelectedEmployeeId(null);
                  setShowForm(true);
                }}
                onEditClick={(id) => {
                  setSelectedEmployeeId(id);
                  setShowForm(true);
                }}
              />
            </Col>

            <Col md={7} sm={12} className="mb-3">
              {showForm && (
                <EmployeeForm
                  employeeId={selectedEmployeeId}
                  onClose={() => setShowForm(false)}
                />
              )}
            </Col>
          </Row>
        </Container>
      </Sidebar>
    </>
  );
}

export default App;

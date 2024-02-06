import { useState } from "react";
import { TEST_SUBJECTS } from "./components/TEST_SUBJECTS";
import HomePage from "./components/HomePage";
import RandomPage from "./components/RandomPage";
import { Link, Route, Routes } from "react-router-dom";
import SubjectPage from "./components/SubjectPage";
import { Container, Nav, Navbar } from "react-bootstrap";



function App() {
  const [StudySubjectslist, setStudySubjectslist] = useState(TEST_SUBJECTS)

  
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to = "/">My Subject List</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to = "/">Home</Nav.Link>
              <Nav.Link as={Link} to = "/random">Random</Nav.Link>
              
            </Nav>
          </Container>
      </Navbar>
      {/* <h1>My Study Subjects</h1> */}
      {/* <Link to = "/" className="btn-link me-3">Home</Link>
      <Link to = "/random" className="btn-link me-3">Random</Link> */}
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage StudySubjectslist ={StudySubjectslist}/>}/>
          <Route path="/random" element= {<RandomPage StudySubjectslist ={StudySubjectslist}/>} />
          <Route path = "/subject/:subjectId" element = {<SubjectPage StudySubjectslist ={StudySubjectslist}/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;

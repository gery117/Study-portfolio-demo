import { useState } from "react";
import { TEST_SUBJECTS } from "./components/TEST_SUBJECTS";
import HomePage from "./components/HomePage";
import RandomPage from "./components/RandomPage";
import { Link, Route, Routes } from "react-router-dom";



function App() {
  const [StudySubjectslist, setStudySubjectslist] = useState(TEST_SUBJECTS)

  



  return (
    <div>
      <h1>My Study Subjects</h1>
      <Link to = "/" className="btn-link me-3">Home</Link>
      <Link to = "random" className="btn-link me-3">Random</Link>
      <Routes>
        <Route path="/" element={<HomePage StudySubjectslist ={StudySubjectslist}/>}/>
        <Route path="random" element= {<RandomPage StudySubjectslist ={StudySubjectslist}/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;

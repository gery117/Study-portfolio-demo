import SubjectCard from "./SubjectCard";

const StudySubjectslist = [
  {
    id: 0,
    name: "Mandarin",
    rating: null,
    category: "Language"
  },

  {
    id: 0,
    name: "Coding",
    rating: null,
    category: "IT"
  },

  {
    id: 0,
    name: "PHD Thesis",
    rating: null,
    category: "University"
  },
]

function App() {
  return (
    <div>
      <h1>My Study Subjects</h1>
      {StudySubjectslist.map(sub => <SubjectCard subject = {sub}/>)}
    </div>
  );
}

export default App;

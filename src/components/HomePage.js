import { useState } from "react";
import SubjectCard from "./SubjectCard";


export default function HomePage({StudySubjectslist}){

    const [subjectFilter, setSubjectFilter] = useState("All");


    let filteredSubjects;
    if(subjectFilter === "All"){
        filteredSubjects = StudySubjectslist;
    }
    else{
        filteredSubjects = StudySubjectslist.filter(subject => subject.category === subjectFilter)
    }

    return (
        <div>
            <div>
                <button className="btn btn-primary me-2" onClick={()=> setSubjectFilter("All") }>All</button>
                <button className="btn btn-primary me-2" onClick={()=> setSubjectFilter("Work") }>Work</button>
                <button className="btn btn-primary me-2" onClick={()=> setSubjectFilter("Fun") }>Fun</button>
                <button className="btn btn-primary me-2" onClick={()=> setSubjectFilter("Health") }>Health</button>
                <button className="btn btn-primary me-2" onClick={()=> setSubjectFilter("University")}>University</button>
                <button className="btn btn-primary me-2" onClick={()=> setSubjectFilter("Personal")}>Personal</button>
            </div>
                {filteredSubjects.map(sub => <SubjectCard subject = {sub}/>)}
        </div>
    )
};
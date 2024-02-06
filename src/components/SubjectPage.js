import { useParams } from "react-router-dom";

export default function SubjectPage({StudySubjectslist}){

    let {subjectId} = useParams()
    subjectId = parseInt(subjectId);

    const subject = StudySubjectslist.find(s => s.id === subjectId)
    
    if(!subject) {
        return <h2>Subject not found</h2>
    }
    
    return (
        <div>
            <h3>{subject.name}</h3>
            <p>{subject.category}</p>
            <p>{subject.rating}</p>
        </div>
    )
};
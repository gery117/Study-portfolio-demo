import { Link} from "react-router-dom";

function SubjectCard({subject}){
    return(
        <div className ="bg-light border p-4 m-2">
            <h4>{subject.name}</h4>
            <p>{subject.rating}</p>
            <p>{subject.category}</p>
            <Link to = {"/subject/" + subject.id}>Details</Link>
        </div>
    )
}

export default SubjectCard;
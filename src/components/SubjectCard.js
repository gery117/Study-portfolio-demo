 function SubjectCard(props){
    return(
        <div className ="bg-light border p-4 m-2">
            <h4>{props.subject.name}</h4>
            <h4>{props.subject.rating}</h4>
            <h4>{props.subject.category}</h4>
        </div>
    )
}

export default SubjectCard;
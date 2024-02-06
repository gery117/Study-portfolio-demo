export default function RandomPage({StudySubjectslist}){

    const randomSubject = StudySubjectslist[Math.floor(Math.random()*StudySubjectslist.length)]
    return (
        <div>
            <h5>You should work on ...</h5>
            <h2 className="display-1">{randomSubject.name}</h2>
        </div>
    )
};
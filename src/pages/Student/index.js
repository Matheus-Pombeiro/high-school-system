import { useParams } from "react-router-dom";

const Student = ({ students }) => {
    const params = useParams();     // Receive the url parameter of the page

    // Returns the specific student based on their id
    const student = students.find((student) => {
        return student.id === params.id;
    });

    const average = ((student.firstGrade + student.secondGrade) / 2);

    return (
        <>
            <h1 className="h1 side-h1">{student.name}</h1>
            <section>
                {student.profilePhoto 
                    ? (
                        <img 
                            src={student.profilePhoto}
                            alt={student.name}
                            title={student.name}
                        />
                    )
                    : ""
                }

                <div>
                    <p>{student.age} years old</p>
                    <p>{student.currentSubject}</p>
                    <p>1st Grade: {student.firstGrade.toFixed(1)}</p>
                    <p>2nd Grade: {student.secondGrade.toFixed(1)}</p>
                    <p>Average: {average.toFixed(1)}</p>
                </div>
            </section>
        </>
    );
};

export default Student;
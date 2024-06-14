import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
import StudentCard from "../../components/StudentCard";

const Students = ({ students, toDeleteStudent }) => {
    // Declare an object that set the buttons' properties
    const btnSettings = {
        color: "black",
        size: 35,
    };

    return (
        <>
            <h1 className="h1 side-h1">Students</h1>

            <h2 className="h2 side-h2">Next you can check your students</h2>

            <div className="w-fit mx-auto mt-12 mb-8 flex gap-5">
                <button>
                    <FaSortAlphaDown {...btnSettings} />
                </button>
                <button>
                    <FaSortAlphaDownAlt {...btnSettings} />
                </button>
            </div>

            {students.length > 0 && (

                <section className="container-cards side-container">
                    {students.map(student => (
                        <StudentCard 
                            student={student}
                            toDeleteStudent={toDeleteStudent}
                        />
                    ))}

                </section>

            )}
            
        </>
    );
};

export default Students;
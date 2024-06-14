import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";

const Students = ({ students }) => {
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
                        <div className="w-64 h-72 bg-white box-border border border-blue-500 rounded-lg flex flex-col">
                            <div className="w-full h-32 bg-blue-500 flex justify-center">
                                <img 
                                    src={student.profilePhoto}
                                    alt={student.name}
                                    title={student.name}
                                    className="size-28 rounded-full relative top-2/4"
                                />
                            </div>
                            <div className="my-auto space-y-4 text-center">
                                <h3 className="mt-8 text-lg text-red-500 font-semibold">{student.name}</h3>
                                <h4>{student.currentSubject}</h4>
                            </div>
                        </div>
                    ))}

                </section>

            )}
            
        </>
    );
};

export default Students;
import { Link } from "react-router-dom";

import { AiFillCloseCircle } from "react-icons/ai";

const StudentCard = ({ student, toDeleteStudent }) => {
    return (
       
        <div
            className="w-64 h-72 bg-white box-border border rounded-lg flex flex-col relative transition-all ease-in-out duration-200 hover:-translate-y-3"
            style={{ borderColor: student.color }}
        >
            <AiFillCloseCircle
                color="red"
                size={25}
                className="absolute -top-4 -right-4 cursor-pointer"
                onClick={() => toDeleteStudent(student.id)}
            />
            <Link to={`/student/${student.id}`} >
                <div 
                    className="w-full h-32 flex justify-center"
                    style={{ backgroundColor: student.color }}
                >
                    {student.profilePhoto
                        ? (
                            <img
                                src={student.profilePhoto}
                                alt={student.name}
                                title={student.name}
                                className="size-28 rounded-full relative top-2/4"
                            />
                        )
                        : ""
                    }
                </div>
                <div className="mt-14 space-y-4 text-center">
                    <h3 className="mt-8 text-lg text-red-500 font-semibold">{student.name}</h3>
                    <h4>{student.currentSubject}</h4>
                </div>
            </Link>
        </div>
    );
};

export default StudentCard;
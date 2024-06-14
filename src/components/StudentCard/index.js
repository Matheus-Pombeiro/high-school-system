const StudentCard = ({ student }) => {
    return (
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
    );
};

export default StudentCard;
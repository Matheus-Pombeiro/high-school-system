import { useTranslation } from "react-i18next";

import { useParams } from "react-router-dom";

const Student = ({ students }) => {
    const { t } = useTranslation();     // Translation reference

    const params = useParams();     // Receive the url parameter of the page

    // Returns the specific student based on their id
    const student = students.find((student) => {
        return student.id === params.id;
    });

    const average = ((student.firstGrade + student.secondGrade) / 2);

    return (
        <>
            <h1 className="h1 side-h1">{student.name}</h1>
            <section 
                className="student-container"
                style={{ borderColor: student.color }}
            >
                {student.profilePhoto 
                    ? (
                        <img 
                            src={student.profilePhoto}
                            alt={student.name}
                            title={student.name}
                            className="size-52 md:size-64 rounded-full"
                        />
                    )
                    : ""
                }

                <div className="flex flex-col justify-center gap-4 text-xl">
                    <p>{student.name}</p>
                    <p>{student.age} {t("years old")}</p>
                    <p>{student.currentSubject}</p>
                    <p>{t("1st Grade")}: {student.firstGrade.toFixed(1)}</p>
                    <p>{t("2nd Grade")}: {student.secondGrade.toFixed(1)}</p>
                    <p>{t("Average")}: {average.toFixed(1)}</p>
                </div>
            </section>
        </>
    );
};

export default Student;
import { useTranslation } from "react-i18next";

import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";

import StudentCard from "../../components/StudentCard";

const Students = ({ students, toDeleteStudent, handleSortCrescent, handleSortDecrescent }) => {
    const { t } = useTranslation();     // Translation reference

    // Declare an object that set the buttons' properties
    const btnSettings = {
        color: "black",
        size: 35
    };

    return (
        <>
            <h1 className="h1 side-h1">{t("h1Students")}</h1>

            <h2 className="h2 side-h2">{t("h2Students")}</h2>

            <div className="w-fit mx-auto mt-12 mb-8 flex gap-5">
                <button onClick={() => handleSortCrescent()}>
                    <FaSortAlphaDown 
                        {...btnSettings} 
                    />
                </button>
                <button onClick={() => handleSortDecrescent()}>
                    <FaSortAlphaDownAlt 
                        {...btnSettings}
                    />
                </button>
            </div>

            {students.length > 0 && (
                <section className="container-cards side-container">
                    {students.map(student => (
                        <StudentCard 
                            student={student}
                            toDeleteStudent={toDeleteStudent}
                            key={student.id}
                        />
                    ))}
                </section>
            )}            
        </>
    );
};

export default Students;
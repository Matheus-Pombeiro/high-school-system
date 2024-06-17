import { useTranslation } from "react-i18next";

import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import Fieldset from "../../components/Fieldset";

const NewStudent = ({ toRegisterStudent }) => {
    const { t } = useTranslation();     // Translation reference

    // Declare a range of states that will contain the student's data
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [profilePhoto, setProfilePhoto] = useState("");
    const [color, setColor] = useState("#000000");
    const [currentSubject, setCurrentSubject] = useState("");
    const [firstGrade, setFirstGrade] = useState("");
    const [secondGrade, setSecondGrade] = useState("");

    // Send the student's data to the father component to be keeped
    const toSubmit = (e) => {
        e.preventDefault();     // Prevents the form's automatic behaviuor

        // Call the function that will send the student's data up
        toRegisterStudent({
            id: uuidv4(),
            name: name,
            age: age,
            profilePhoto: profilePhoto,
            color: color,
            currentSubject: currentSubject,
            firstGrade: firstGrade,
            secondGrade: secondGrade
        });

        // Clean all the states after been used to be used again
        setName("");
        setAge("");
        setProfilePhoto("");
        setColor("#000000");
        setCurrentSubject("");
        setFirstGrade("");
        setSecondGrade("");
    };

    return (
        <>
            <h1 className="h1 side-h1">{t("h1NewStudent")}</h1>

            <h2 className="h2 side-h2">{t("h2NewStudent")}</h2>

            <form 
                className="container-form side-container"
                onSubmit={toSubmit}
            >
                <Fieldset 
                    content={t("Name")}
                    type={"text"}
                    required={true}
                    value={name}
                    toChange={value => setName(value)}
                />

                <Fieldset 
                    content={t("Age")}
                    type={"number"}
                    required={true}
                    value={age}
                    toChange={value => setAge(Number(value))}
                />

                <Fieldset 
                    content={t("Profile Photo")}
                    type={"text"}
                    required={false}
                    value={profilePhoto}
                    toChange={value => setProfilePhoto(value)}
                />

                <Fieldset 
                    content={t("Color")}
                    type={"color"}
                    required={true}
                    value={color}
                    toChange={value => setColor(value)}
                />

                <Fieldset 
                    content={t("Current Subject")}
                    type={"text"}
                    required={true}
                    value={currentSubject}
                    toChange={value => setCurrentSubject(value)}
                />

                <div className="fieldset-container">
                    <Fieldset 
                        content={t("1st Grade")}
                        type={"number"}
                        required={true}
                        value={firstGrade}
                        toChange={value => setFirstGrade(Number(value))}
                    />

                    <Fieldset 
                        content={t("2nd Grade")}
                        type={"number"}
                        required={true}
                        value={secondGrade}
                        toChange={value => setSecondGrade(Number(value))}
                    />
                </div>

                <button className="form-btn">{t("Register")}</button>
            </form>
        </>
    );
};

export default NewStudent;
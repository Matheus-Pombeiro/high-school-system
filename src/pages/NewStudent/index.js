const NewStudent = () => {
    return (
        <>
            <h1 className="h1 side-h1">New Student</h1>

            <h2 className="h2 text-center">Next you can register a student</h2>

            <form className="container box-border p-5 bg-slate-100 border border-red-500 flex flex-col justify-center items-center gap-5 rounded-md drop-shadow-md">
                <fieldset className="fieldset">
                    <label 
                        htmlFor="name" 
                        className="label"
                    >
                        Name                      
                    </label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Name..."
                        className="input"
                    />
                </fieldset>

                <fieldset className="fieldset">
                    <label 
                        htmlFor="age" 
                        className="label"
                    >
                        Age
                    </label>
                    <input
                        id="age"
                        type="number"
                        placeholder="Age..."
                        className="input"
                    />
                </fieldset>

                <fieldset className="fieldset">
                    <label 
                        htmlFor="profile" 
                        className="label"
                    >
                        Profile Photo
                    </label>
                    <input
                        id="profile"
                        type="text"
                        placeholder="Profile Photo..."
                        className="input"
                    />
                </fieldset>

                <fieldset className="fieldset">
                    <label 
                        htmlFor="subject" 
                        className="label"
                    >
                        Current Subject
                    </label>
                    <input
                        id="subject"
                        type="text"
                        placeholder="Current Subject..."
                        className="input"
                    />
                </fieldset>

                <div className="fieldset-container">
                    <fieldset className="fieldset">
                        <label 
                            htmlFor="firstGrade" 
                            className="label"
                        >
                            1st Grade
                        </label>
                        <input
                            id="firstGrade"
                            type="number"
                            placeholder="1st Grade..."
                            className="input"
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label 
                            htmlFor="secondGrade" 
                            className="label"
                        >
                            2nd Grade
                        </label>
                        <input
                            id="secondGrade"
                            type="number"
                            placeholder="2nd Grade..."
                            className="input"
                        />
                    </fieldset>
                </div>

                <button
                    className="form-btn"
                >
                    Submit                   
                </button>
            </form>
        </>
    );
};

export default NewStudent;
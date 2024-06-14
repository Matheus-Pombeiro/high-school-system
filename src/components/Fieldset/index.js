const Fieldset = ({ content, type, required, value, toChange }) => {
    return (
        <fieldset className="fieldset">
            <label 
                htmlFor={content} 
                className="label"
            >
                {content}                      
            </label>
            <input
                id={content}
                type={type}
                min={type === "number" ? "0" : ""}
                placeholder={`${content}...`}
                className="input"
                required={required}
                value={value}
                onChange={e => toChange(e.target.value)}
            />
        </fieldset>
    );
};

export default Fieldset;
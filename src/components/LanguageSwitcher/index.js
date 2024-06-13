import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    // Declare an array that contains objects with the languages' data
    const languageOptions = [
        {
            name: "English",
            value: "en",
            flag: "/assets/usa-flag.png"
        },
        {
            name: "Português",
            value: "pt",
            flag: "/assets/brazil-flag.png"
        }
    ]
    
    return (
        <>
            {languageOptions.map(languageOption => (
                <button
                    key={languageOption.value}
                    onClick={() => {
                        i18n.changeLanguage(languageOption.value)
                    }}
                >
                    <img 
                        src={languageOption.flag}
                        alt={languageOption.name}
                        title={languageOption.name}
                        className="h-10"
                    />
                </button>
            ))}
        </>
    );
};

export default LanguageSwitcher;
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();

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
                    />
                </button>
            ))}
        </>
    );
};

export default LanguageSwitcher;
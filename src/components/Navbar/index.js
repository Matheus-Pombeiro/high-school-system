import { useTranslation } from "react-i18next";

import HeaderLink from "../HeaderLink";

const Navbar = ({ menuIsOpen }) => {
    const { t } = useTranslation();     // Translation reference

    return (
        <nav className={`
            box-border md:flex justify-between items-center gap-5
            ${menuIsOpen 
                ? "w-full flex flex-col md:hidden" 
                : "hidden"
            }
        `}>
            <HeaderLink to="/" >
                {t("Home")}
            </HeaderLink>
            <HeaderLink to="/new-student" >
                {t("New Student")}
            </HeaderLink>
            <HeaderLink to="/students">
                {t("Students")}
            </HeaderLink>
        </nav>
    );
};

export default Navbar;
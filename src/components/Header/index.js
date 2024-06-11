import { NavLink } from "react-router-dom";
import HeaderLink from "../HeaderLink";
import ThemeSwitcher from "../ThemeSwitcher";

const Header = () => {
    return (
        <header className="box-border py-3 px-5 bg-blue-500 flex justify-between items-center">
            <NavLink to="/" >
                <img 
                    src="/assets/logo.png" 
                    alt="Logo" 
                    title="Home"
                    className="h-14"
                />
            </NavLink>

            <nav className="box-border flex justify-between items-center gap-3">
                <HeaderLink to="/" >
                    Home
                </HeaderLink>
                <HeaderLink to="/new-student" >
                    New Student
                </HeaderLink>
            </nav>

            <ThemeSwitcher />
        </header>
    );
};

export default Header;
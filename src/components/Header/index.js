import { NavLink } from "react-router-dom";

import { useState } from "react";

import MenuHamburger from "../MenuHamburger";
import Navbar from "../Navbar";
import LanguageSwitcher from "../LanguageSwitcher";

const Header = () => {
    // Declare a state that will help to verify if the menu hamburger is open or not
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    // Declare an object that set the buttons' properties
    const btnSettings = {
        color: "white",
        size: 30,
    };

    return (
        <header className="w-full box-border py-3 px-5 bg-blue-500 flex justify-between items-center flex-wrap drop-shadow-md">
            <NavLink to="/" >
                <img 
                    src="/assets/logo.png" 
                    alt="Logo" 
                    title="Home"
                    className="h-14"
                />
            </NavLink>

            <Navbar />

            <div className="box-border flex justify-between items-center gap-2">
                <LanguageSwitcher />
                <MenuHamburger 
                    btnSettings={btnSettings}
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                    menuIsOpen={menuIsOpen}
                />
            </div>

            {menuIsOpen ? <Navbar menuIsOpen={menuIsOpen} /> : ""}
        </header>
    );
};

export default Header;
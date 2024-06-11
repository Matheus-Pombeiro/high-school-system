import { useState } from "react";

import { IoSunny, IoMoonSharp  } from "react-icons/io5";

const ThemeSwitcher = () => {
    // Declare a state that wiil help to change the icon of the theme button
    const [themeBtn, setThemeBtn] = useState(true); 

    // Declare an object that set the theme button's properties
    const themeBtnSettings = {
        color: "white",
        size: 30,
    };

    // Declare a function that will change the app's theme
    const handleTheme = () => {
        document.documentElement.classList.toggle("dark");
        setThemeBtn(!themeBtn);
    };

    return (
        <button onClick={handleTheme}>
            {themeBtn 
                ? <IoSunny {...themeBtnSettings} /> 
                : <IoMoonSharp {...themeBtnSettings} />
            }
        </button>
    );
};

export default ThemeSwitcher;
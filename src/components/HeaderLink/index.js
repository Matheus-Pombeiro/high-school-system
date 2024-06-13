import { NavLink } from "react-router-dom";

const HeaderLink = ({children, to}) => {
    return (
        <NavLink
            className={({ isActive }) => `
                text-white text-2xl font-medium pb-0.5
                ${isActive ? "border-b-2 border-red-500" : ""}
            `}
            to={to}
        >
            {children}
        </NavLink>
    );
};

export default HeaderLink;
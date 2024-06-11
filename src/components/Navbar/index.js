import HeaderLink from "../HeaderLink";

const Navbar = ({ menuIsOpen }) => {
    return (
        <nav className={`
            box-border md:flex justify-between items-center gap-3
            ${menuIsOpen 
                ? "w-full flex flex-col md:hidden" 
                : "hidden"
            }
        `}>
            <HeaderLink to="/" >
                Home
            </HeaderLink>
            <HeaderLink to="/new-student" >
                New Student
            </HeaderLink>
        </nav>
    );
};

export default Navbar;
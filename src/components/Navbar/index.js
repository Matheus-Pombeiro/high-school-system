import HeaderLink from "../HeaderLink";

const Navbar = ({ menuIsOpen }) => {
    return (
        <nav className={`
            box-border md:flex justify-between items-center gap-5
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
            <HeaderLink to="/students">
                Students
            </HeaderLink>
        </nav>
    );
};

export default Navbar;
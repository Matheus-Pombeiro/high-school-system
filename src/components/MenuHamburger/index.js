import { IoMenu, IoClose } from "react-icons/io5";

const MenuHamburger = ({ btnSettings, onClick, menuIsOpen }) => {
    return (
        <button 
            className="md:hidden"
            onClick={onClick}
        >
            {menuIsOpen
                ? <IoClose {...btnSettings} />
                : <IoMenu {...btnSettings} />    
            }
        </button>
    );
};

export default MenuHamburger;
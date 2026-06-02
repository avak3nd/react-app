import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? "text-white" : "text-neutral-400 hover:text-white transition-all duration-200";

    return (
        <div className="max-w-282.5 mx-auto py-8">
            <ul className="flex items-center gap-8 text-[14px]">
                <li><SearchBar /></li>
                <li><NavLink to="/" className={linkClass} end>Discover</NavLink></li>
                <li><NavLink to="/browse" className={linkClass}>Browse</NavLink></li>
                <li><NavLink to="/news" className={linkClass}>News</NavLink></li>
            </ul>
        </div>
    );
}

export default Navbar;
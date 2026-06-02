import { NavLink, Link } from "react-router-dom";
import { Menu, Atom } from "@boxicons/react";

import SearchBar from "./SearchBar";

type Sidebar = {
    sidebarFunc: () => void;
}

function Navbar({ sidebarFunc }: Sidebar) {
    const linkClass = ({ isActive }: { isActive: boolean }) =>
        isActive ? "text-white" : "text-neutral-400 hover:text-white transition-all duration-200";

    return (
        <div className="max-w-300 mx-auto py-8 max-[768px]:py-7">
            <div className="flex items-center gap-8">
                <Link
                    to="/"
                    className="text-white font-bold text-[20px] flex items-center gap-4"
                >
                    <Atom fill="white" size="md" />
                    <p>React Games</p>
                </Link>
                <ul className="flex items-center gap-8 text-[14px] max-[768px]:hidden ml-5">
                    <li><NavLink to="/" className={linkClass} end>Discover</NavLink></li>
                    <li><NavLink to="/browse" className={linkClass}>Browse</NavLink></li>
                    <li><NavLink to="/news" className={linkClass}>News</NavLink></li>
                </ul>
                <div className="max-[768px]:hidden ml-auto">
                    <SearchBar />
                </div>
                <div className="hidden max-[768px]:flex items-center gap-6 ml-auto">
                    <button className="cursor-pointer" onClick={sidebarFunc}><Menu fill="white" size="sm" removePadding /></button>
                </div>
            </div>
            <div className="hidden max-[768px]:block mt-6">
                <SearchBar rounded={true} />
            </div>
        </div>
    );
}

export default Navbar;
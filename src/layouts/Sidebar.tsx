import { Link } from "react-router-dom"
import { News, Compass, Globe } from "@boxicons/react"

type Sidebar = {
    sidebarFunc: () => void;
    sidebar: boolean;
}

function Sidebar({ sidebarFunc, sidebar }: Sidebar) {
    return (
        <div>
            <div className={`fixed top-0 left-0 h-screen overflow-auto py-4 ${sidebar ? "opacity-100 pointer-events-auto translate-x-0" : "opacity-0 pointer-events-none -translate-x-12.5"} transition-all duration-200 bg-neutral-950 w-75 z-70 shadow-lg shadow-neutral-950`}>
                <ul className="text-white text-[14px]">
                    <li>
                        <Link to="/" onClick={sidebarFunc} className="px-5 py-3 items-center gap-4 hover:bg-neutral-800 flex transition-all duration-200">
                            <Globe fill="white" size="sm" />
                            <span>Discover</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/browse" onClick={sidebarFunc} className="px-5 py-3 items-center gap-4 hover:bg-neutral-800 flex transition-all duration-200">
                            <Compass fill="white" size="sm" />
                            <span>Browse</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/news" onClick={sidebarFunc} className="px-5 py-3 items-center gap-4 hover:bg-neutral-800 flex transition-all duration-200">
                            <News fill="white" size="sm" />
                            <span>News</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div onClick={sidebarFunc} className={`fixed w-full h-full bg-neutral-950/50 backdrop-blur-[2.5px] top-0 left-0 z-60 ${sidebar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-200`} />
        </div>
    )
}

export default Sidebar
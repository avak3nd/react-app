function Footer() {
    return (
        <div className="max-w-300 mx-auto pt-10 pb-20 text-neutral-400 text-[14.5px] flex items-center justify-between">
            <p>© 2026 Epic Games, Inc.</p>
            <ul className="flex items-center justify-between gap-8">
                <li><a href="#" className="hover:text-white transition-all duration-200">Terms of use</a></li>
                <li><a href="#" className="hover:text-white transition-all duration-200">Privacy policy</a></li>
            </ul>
        </div>
    )
}

export default Footer
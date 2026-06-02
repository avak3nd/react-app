function Event() {
    return (
        <div className="max-w-300 mx-auto text-white h-100 overflow-hidden rounded-2xl relative flex items-center justify-center">
            <img
                src="/home/event/banner.jpg"
                alt="event"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-neutral-950/50 z-10" />

            <div className="relative z-20 text-center">
                <center>
                    <img
                        src="/home/event/logo.png"
                        alt="logo"
                        className="w-61.25 mb-8"
                    />
                </center>
                <b className="text-[20px]">This Week in Fortnite</b>
                <p className="py-2 text-neutral-400">See what's new in Fortnite in one place!</p>
                <center>
                    <a href="#" className="bg-white text-black py-3 px-5 flex w-fit mt-4 rounded-lg text-[14px] hover:bg-neutral-300 transition-all duration-200">Discover more</a>
                </center>
            </div>
        </div>
    );
}

export default Event;
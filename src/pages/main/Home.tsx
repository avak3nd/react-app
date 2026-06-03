import Banner from "../../components/home/Banner"
import New from "../../components/home/New"
import Sales from "../../components/home/Sales"
import Free from "../../components/home/Free"
import NewReleases from "../../components/home/NewReleases"
import Event from "../../components/home/Event"
import Trending from "../../components/home/Trending"
import Popular from "../../components/home/Popular"
import Other from "../../components/home/Other"

function Home() {
    document.title = "React Games | Discover";

    return (
        <div>
            <div className="py-8">
                <Banner />
            </div>
            <div className="py-8">
                <New />
            </div>
            <div className="py-8">
                <Sales />
            </div>
            <div className="py-8">
                <Free />
            </div>
            <div className="py-8">
                <NewReleases />
            </div>
            <div className="py-8">
                <Event />
            </div>
            <div className="py-8">
                <Trending />
            </div>
            <div className="py-8">
                <Popular />
            </div>
            <div className="py-8">
                <Other />
            </div>
        </div>
    )
}

export default Home
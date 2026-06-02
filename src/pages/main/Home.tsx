import Banner from "../../components/home/Banner"
import New from "../../components/home/New"
import Sales from "../../components/home/Sales"
import Free from "../../components/home/Free"
import NewReleases from "../../components/home/NewReleases"
import Event from "../../components/home/Event"

function Home() {
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
        </div>
    )
}

export default Home
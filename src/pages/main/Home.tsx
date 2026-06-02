import Banner from "../../components/home/Banner"
import New from "../../components/home/New"
import Sales from "../../components/home/Sales"

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
        </div>
    )
}

export default Home
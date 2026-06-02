import Banner from "../../components/home/Banner"
import New from "../../components/home/New"

function Home() {
    return (
        <div>
            <div className="py-8">
                <Banner />
            </div>
            <div className="py-8">
                <New />
            </div>
        </div>
    )
}

export default Home
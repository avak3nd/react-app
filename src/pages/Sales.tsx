import Card from "../components/ui/Card";

import { useGamesByTag } from "../hooks/useGamesByTag";

function Sales() {
    document.title = "React Games | Sales & Deals";

    const { data: games = [], isLoading, isError } = useGamesByTag("sale");

    if (isLoading) {
        return (
            <div className="max-w-300 mx-auto text-white py-8">
                Loading...
            </div>
        );
    }

    if (isError) {
        return (
            <div className="max-w-300 mx-auto text-red-500 py-8">
                Failed to load games
            </div>
        );
    }

    return (
        <div className="max-w-300 mx-auto text-white py-8">
            <b className="text-[35px] max-[768px]:text-[30px] max-[500px]:text-[25px] max-[400px]:text-[20px]">Sales & Deals</b>

            <div className="grid grid-cols-5 max-[1024px]:grid-cols-4 max-[768px]:grid-cols-3 max-[600px]:grid-cols-2 pt-14 max-[768px]:pt-10 max-[500px]:pt-7.5 gap-x-6 gap-y-14 max-[500px]:gap-y-10">
                {games.map((game, index) => (
                    <div key={index}>
                        <Card game={game} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sales
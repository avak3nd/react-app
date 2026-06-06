import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGame } from "../../hooks/useGame";

function Product() {
    const { id } = useParams();

    const { data: game, isLoading, isError } = useGame(id!);

    useEffect(() => {
        if (isLoading) {
            document.title = "Loading...";
            return;
        }

        if (isError || !game) {
            document.title = "Game Not Found";
            return;
        }

        document.title = `React Games | ${game.title}`;
    }, [game, isLoading, isError]);

    if (isLoading) {
        return (
            <div className="max-w-300 mx-auto text-white py-8">
                Loading...
            </div>
        );
    }

    if (isError || !game) {
        return (
            <div className="max-w-300 mx-auto text-red-500 py-8">
                Game not found
            </div>
        );
    }

    return (
        <div className="max-w-300 mx-auto text-white py-8">
            <h1 className="text-4xl font-bold">
                {game.title}
            </h1>
        </div>
    );
}

export default Product;
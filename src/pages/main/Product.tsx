import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGame } from "../../hooks/useGame";

import Header from "../../components/product/Header";

function Product() {
    const { id } = useParams();

    const { data: game, isLoading, isError } = useGame(id!);
    const [isLoaded, setIsLoaded] = useState(false);

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
            <div className="flex items-start gap-6">

                {/* Block 1 */}
                <div className="w-205">
                    <Header
                        game={game}
                        isLoaded={isLoaded}
                        setIsLoaded={setIsLoaded}
                    />
                </div>
            </div>
        </div>
    );
}

export default Product;
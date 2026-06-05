import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardLoading() {
    return (
        <div>
            <div className="overflow-hidden rounded-2xl">
                <Skeleton
                    height={294.39}
                    borderRadius={16}
                />
            </div>

            <div className="mt-4">
                <Skeleton width={80} height={14} />
            </div>

            <div className="mt-2">
                <Skeleton count={2} height={16} />
            </div>

            <div className="mt-4 flex gap-3">
                <Skeleton width={55} height={16} />
            </div>
        </div>
    );
}

export default CardLoading;
import { Star, StarHalf, Child, Image, Like, User, Group, BookOpen } from "@boxicons/react";
import type { Game } from "../../types/game";

interface HeaderProps {
    game: Game;
    isLoaded: boolean;
    setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ game, isLoaded, setIsLoaded }: HeaderProps) {
    const getStars = (rank?: number | null) => {
        const value = rank ?? 0;

        const fullStars = Math.floor(value);
        const hasHalfStar = value % 1 >= 0.5;

        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return { fullStars, hasHalfStar, emptyStars };
    };

    const stars = getStars(game.rank);

    const hasComments = game.comment && game.comment.length > 0;
    const hasBadges = game.badge && game.badge.length > 0;
    const hasRank = game.rank !== null && game.rank !== undefined;

    const getCommentIcon = (comment: string) => {
        switch (comment) {
            case "Great for Beginners":
                return <Child fill="white" />;

            case "Beautiful Visuals":
                return <Image fill="white" />;

            case "Highly Recommended":
                return <Like fill="white" />;

            case "Amazing Characters":
                return <User fill="white" />;

            case "Diverse Characters":
                return <Group fill="white" />;

            case "Amazing Storytelling":
                return <BookOpen fill="white" />;

            default:
                return null;
        }
    };

    return (
        <div className="flex items-center gap-9">
            <div className="relative aspect-3/4 max-w-37.5 overflow-hidden rounded-2xl w-full">
                {!isLoaded && (
                    <div className="absolute inset-0 animate-pulse bg-neutral-800" />
                )}

                <img
                    src={game.img}
                    alt={game.title}
                    onLoad={() => setIsLoaded(true)}
                    loading="lazy"
                    className={`
                        h-full w-full object-cover
                        transition-all duration-500 ease-out
                        ${isLoaded ? "opacity-100" : "opacity-0"}
                    `}
                />
            </div>

            <div>
                <h1 className="text-3xl font-extrabold">{game.title}</h1>

                <div className="flex items-center flex-wrap gap-5 mt-3 text-[14px]">
                    <div className="flex items-center">
                        {Array.from({ length: stars.fullStars }).map(
                            (_, i) => (
                                <Star key={`full-${i}`} pack="filled" size="sm" />
                            )
                        )}

                        {stars.hasHalfStar && (
                            <StarHalf pack="filled" size="sm" />
                        )}

                        {Array.from({
                            length: stars.emptyStars,
                        }).map((_, i) => (
                            <Star key={`empty-${i}`} size="sm" />
                        ))}

                        <p className="ml-2 text-neutral-300">
                            {hasRank ? game.rank?.toFixed(1) : "0.0"}
                        </p>
                    </div>

                    {hasComments &&
                        game.comment!.map((item, idx) => (
                            <div key={idx} className="text-neutral-400 flex items-center gap-2">
                                {getCommentIcon(item)}
                                <p className="text-nowrap"> {item}</p>
                            </div>
                        ))}
                </div>

                {hasBadges && (
                    <div className="mt-6 text-[13.5px] flex flex-wrap gap-3">
                        {game.badge!.map((item, idx) => (
                            <p key={idx} className="bg-neutral-800 w-fit py-1 px-4 rounded-xl text-nowrap">{item}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header;
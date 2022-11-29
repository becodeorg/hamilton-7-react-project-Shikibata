import React from "react";
import {motion} from "framer-motion";
import {useSelector} from "react-redux";
import {FaSteam, FaXbox, FaWindows, FaStar} from "react-icons/fa";
import {
    SiNintendoswitch,
    SiNintendogamecube,
    SiPlaystation5,
    SiPlaystation4,
} from "react-icons/si";

const GameDetails = ({pathId}) => {
    const handleRating = rating => rating * 4;
    const playstation4 = <SiPlaystation4 />;
    const playstation5 = <SiPlaystation5 />;
    const steam = <FaSteam />;
    const xbox = <FaXbox />;
    const windows = <FaWindows />;
    const nintendo = <SiNintendoswitch />;
    const gamecube = <SiNintendogamecube />;

    const platformIconHandler = platform => {
        switch (platform) {
            case "PlayStation 4":
                return playstation4;
            case "PlayStation 5":
                return playstation5;
            case "Steam":
                return steam;

            case "Xbox Series S/X":
                return xbox;
            case "PC":
                return windows;
            case "Nintendo":
                return nintendo;
            default:
                return gamecube;
        }
    };

    const {images, game, isLoading} = useSelector(state => state.details);

    return (
        <>
            {" "}
            {!isLoading && (
                <motion.div className={"card-container"} layoutId={pathId}>
                    <motion.div
                        className={"card-details"}
                        initial={{y: 10, opacity: 0}}
                        animate={{y: 20, opacity: 1}}
                        exit={{y: -20, opacity: 0}}
                        transition={{duration: 0.4}}
                        layoutId={pathId}>
                        <div className={"card-main"}>
                            <motion.h3 layoutId={`title ${pathId}`}>
                                {game.name}
                            </motion.h3>
                            <div className={"rating"}>
                                <FaStar />
                                <p>{handleRating(game.rating)}/20</p>
                            </div>
                            <div className={"card-info"}>
                                <h3>Platform</h3>
                                <div className={"card-platform"}>
                                    {game.platforms.map(data => (
                                        <div key={data.platform.id}>
                                            {platformIconHandler(
                                                data.platform.name,
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={"card-media"}>
                            <motion.img
                                layoutId={`image ${pathId}`}
                                src={game.background_image}
                                alt={game.name}
                            />
                        </div>
                        <div className={"card-description"}>
                            <p>={game.description_raw}</p>
                        </div>
                        <div className={"card-gallery"}>
                            {/* eslint-disable-next-line no-shadow */}
                            {images.results.map(images => (
                                <img
                                    src={images.image}
                                    alt={images.name}
                                    key={images.id}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default GameDetails;

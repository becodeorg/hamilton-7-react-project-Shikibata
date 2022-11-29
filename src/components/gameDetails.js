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

const GameDetails = () => {
    const idPath = location.pathname.split("/")[2];
    console.log("NewIdPath", typeof idPath + idPath);
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
            case "Xbox One":
                return xbox;
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

    const {images, game} = useSelector(state => state.details);

    return (
        <>
            <div className={"card-container"}>
                <motion.div
                    className={"card-details"}
                    initial={{y: 10, opacity: 0}}
                    animate={{y: 20, opacity: 1}}
                    exit={{y: -20, opacity: 0}}
                    transition={{duration: 0.4}}
                    layoutId={idPath}>
                    <div className={"card-main"}>
                        <motion.h3 layoutId={`title ${idPath}`}>
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
                            layoutId={`image ${idPath}`}
                            src={game.background_image}
                            alt={game.name}
                        />
                    </div>
                    <div className={"card-description"}>
                        <p>={game.description_raw}</p>
                    </div>
                    <div className={"card-gallery"}>
                        {images.results.map(image => (
                            <img
                                src={image.image}
                                alt={image.name}
                                key={image.id}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default GameDetails;

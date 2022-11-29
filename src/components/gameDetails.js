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
import "./gameDetails.css";
import {SwiperSlide, Swiper} from "swiper/react";
import "swiper/swiper-bundle.css";
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
    console.log(images);
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
                        <motion.h1
                            className={"card-title"}
                            layoutId={`title ${pathId}`}>
                            {game.name}
                        </motion.h1>
                        <div className={"rating"}>
                            <FaStar className={"star"} />
                            <p>{handleRating(game.rating)}/20</p>
                        </div>
                        <div className={"card-platform"}>
                            {game.platforms.map(data => (
                                <div key={data.platform.id}>
                                    {platformIconHandler(data.platform.name)}
                                </div>
                            ))}
                        </div>
                        <div className={"card-media"}>
                            <motion.img
                                className={"card-image"}
                                layoutId={`image ${pathId}`}
                                src={game.background_image}
                                alt={game.name}
                            />
                        </div>
                        <p className={"card-description"}>
                            {game.description_raw}
                        </p>
                        <Swiper
                            className={"card-gallery"}
                            spaceBetween={1}
                            slidesPerView={images.results.length - 1}
                            onSlideChange={() => console.log("slide change")}
                            onSwiper={swiper => console.log(swiper)}>
                            {images.results.map((image, index) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <SwiperSlide key={index}>
                                    <img
                                        src={image.image}
                                        className={"image-carousel"}
                                        alt={image.name}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};

export default GameDetails;

import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Feeter className={"footer"}>
            <p>{year} - Loïc Henrottin</p>
        </Feeter>
    );
};

const Feeter = styled(motion.div)`
    position: sticky;
    top: 100%;
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
`;

export default Footer;

import React, {useState} from "react";
import {listSearch} from "../actions/gamesAction";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {motion} from "framer-motion";
import logo from "../assets/images/logo.png";

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = e => {
        setTextInput(e.target.value);
    };
    const submitSearch = e => {
        e.preventDefault();
        dispatch(listSearch(textInput));
        setTextInput("");
    };
    const clearSearched = () => {
        dispatch({type: "CLEAR_SEARCHED"});
    };
    return (
        <Navbar>
            <LogoNav onClick={clearSearched}>
                <img src={logo} alt={"log"} />
            </LogoNav>
            <form className={"formSearch"}>
                <input
                    value={textInput}
                    onChange={inputHandler}
                    type={"text"}
                />{" "}
                <button onClick={submitSearch} type={"submit"}>
                    Search
                </button>
            </form>{" "}
        </Navbar>
    );
};

const Navbar = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
`;

const LogoNav = styled(motion.div)`
    img {
        height: 5rem;
        cursor: pointer;
    }
`;

export default Nav;

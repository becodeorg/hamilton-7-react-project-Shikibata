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
            <SearchBox>
                <input
                    value={textInput}
                    onChange={inputHandler}
                    type={"text"}
                />{" "}
                <button onClick={submitSearch} type={"submit"}>
                    Search
                </button>
            </SearchBox>{" "}
        </Navbar>
    );
};

const Navbar = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    width: 100%;
    z-index: 9999;
    background-color: #202020;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 2;
    background-color: transparent;
    transition: 0.2s;
`;

const LogoNav = styled(motion.div)`
    img {
        height: 3rem;
        cursor: pointer;
    }
`;

const SearchBox = styled(motion.div)`
    display: flex;
    justify-content: center;
    height: 55px;
    align-items: center;
    max-width: 500px;
`;

export default Nav;

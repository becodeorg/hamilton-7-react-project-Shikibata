import React, {useState} from "react";
import {listSearch} from "../actions/gamesAction";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {motion} from "framer-motion";
import logo from "../assets/images/logo.png";
import {FaSearch} from "react-icons/fa";
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
            <LogoNav onClick={clearSearched} href={Home}>
                <img src={logo} alt={"log"} />
            </LogoNav>
            <SearchBox>
                <input
                    value={textInput}
                    onChange={inputHandler}
                    type={"text"}
                    placeholder={"Search your favorite game"}
                />{" "}
                <button onClick={submitSearch} type={"submit"}>
                    <FaSearch />
                </button>
            </SearchBox>{" "}
        </Navbar>
    );
};

const Navbar = styled(motion.div)`
    display: flex;
    align-items: center;
    position: fixed;
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
    width: 25%;

    input {
        border: none;
        outline: none;
        padding: 0.4rem;
        background-color: #d5d5e0;
        border-radius: 20px;
        width: 100%;
        color: black;
    }

    button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        padding-left: 0.5rem;

        FaSearch {
            width: 50px;
        }
    }
`;

export default Nav;

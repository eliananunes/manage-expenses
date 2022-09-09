import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";

const Header = () => {
    const { name, email } = useSelector(selectUser);
    return(
        <header>
            <h4>{name}</h4>
            <h4>{email}</h4>
        </header>
    );
}

export default Header;
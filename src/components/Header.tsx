import React from "react";
import HeadStyle from "./Header.module.scss";
import { Link } from "react-router-dom";

import logoImg from "../images/logo.png";

const Header = () => {

    return (
        <div>
            <div className={HeadStyle.content}>
                <Link to="/" className={HeadStyle.link}>
                    <img src={logoImg} alt="로고 이미지" />
                    <span>GALLERY</span>
                </Link>
            </div>
        </div>
    );
}

export default Header;
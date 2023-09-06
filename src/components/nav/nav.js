import React from "react";
import './nav.css';
function Nav() {
    return (
        <div className="navbar__container">
            <ul className="navbar">
                <li className="navbar__item">
                    <a href="www.google.pt">About me</a>
                </li>
                <li className="navbar__item">
                    <a href="www.google.pt">Projects</a>
                </li>
                <li className="navbar__item">
                    <a href="www.google.pt">Contact me</a>
                </li>
            </ul>
        </div>
    );
}
export default Nav;
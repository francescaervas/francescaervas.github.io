import React from "react";
import classes from "./navbar.module.css";

export const Navbar = (props) => {
    const links = [
        "About me",
        "Research",
        "Publications",
        "Conferences-Talks",
        "Teaching",
        "Editorial Boards",
        "Outreach",
        "Contacts",
    ];
    const handleClick = function (e) {
        e.stopPropagation();
        props.onClick(e.target.innerHTML);
    };
    return (
        <ul className={classes.navbar}>
            {links.map((e, i) => (
                <li key={i}>
                    <a href="#" onClick={handleClick}>
                        {e}
                    </a>
                </li>
            ))}
        </ul>
    );
};

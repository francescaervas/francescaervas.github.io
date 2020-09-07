import React from "react";
import classes from "./article.module.css";
import marked from "marked";
import parse from "html-react-parser";

export const Article = ({ name, story }) => (
    <div className={classes.article}>
        <h2>{name}</h2>
        <div>
            <img src="./images/fra.jpg" alt="" />
            <span>{parse(marked(story || ""))}</span>
        </div>
    </div>
);

import React, { Component } from "react";
import "./App.css";
import { Navbar } from "./navbar/navbar";
import { Article } from "./article/article";
import { setArticle } from "./services/navigation-handler";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.setArticle = setArticle.bind(this);
    }

    componentDidMount = () => this.setArticle("About me");

    render = () => (
        <div className="App">
            <h1>Francesca Ervas</h1>
            <Navbar onClick={this.setArticle}></Navbar>
            <Article {...this.state}></Article>
        </div>
    );
}

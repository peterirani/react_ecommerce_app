import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import SHOP_DATA from "../../data/shop.data";
import GoToLinkButton from "../../components/go-to-link-button/go-to-link-button.component";

class Shoppage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections : SHOP_DATA
        }
    }

    goToLink = (link) => {
        this.props.history.push(link)
    };

    render() {
        console.log(this.props);
        return(
            <div>
                <GoToLinkButton goToFunc={this.goToLink} link={"/"} textButton="Go to Home"/>
                <GoToLinkButton goToFunc={this.goToLink} link={"/hats"} textButton="Go to hats"/>
                SHOP PAGE!!
            </div>
        )
    }

}

export default withRouter(Shoppage);
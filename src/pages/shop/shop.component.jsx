import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import SHOP_DATA from "../../data/shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

// import GoToLinkButton from "../../components/go-to-link-button/go-to-link-button.component";

class ShopPage extends Component {
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
        const { collections } = this.state;
        return(
            <div>
                {/*<GoToLinkButton goToFunc={this.goToLink} link={"/"} textButton="Go to Home"/>*/}
                {
                    // iterate through the shop data and make a collection preview for each e.g: hats, sneakers, etc.
                    collections.map(({id,...restOfCollection}) => <CollectionPreview key={id} {...restOfCollection}/>)
                }
            </div>
        )
    }

}

export default withRouter(ShopPage);
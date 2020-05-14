import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import sections from "./sections";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss"


class Directory extends Component{
        constructor(props) {
                super(props);
                this.state = {
                        sections : sections
                }
                console.log(this.props);
        }

        render(){
                let { sections } = this.state;

                return(
                    <div className="directory-menu">
                            {/*destructuring the each `section`*/}
                            {/*{ sections.map( ({ title, imageURL, id, linkURL }) => (<MenuItem key={id}*/}
                            {/*                                                                 title={title}*/}
                            {/*                                                                 imageURL={imageURL}*/}
                            {/*                                                                 linkURL={linkURL}/>)) }*/}

                            { sections.map( ({ id, ...restOfProps}) => (<MenuItem key={id} {...restOfProps} />)) }
                    </div>
                )
        }

}

// when you wrap the component with `withRouter` it produces a improved component with the same name and but has all the route properties passed to its child component
// so wrapping Directory will not work for menuitem. Each item that needs those route properties will have to wrapped individually.

export default withRouter(Directory);

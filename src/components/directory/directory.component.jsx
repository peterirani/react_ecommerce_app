import React, { Component } from "react";

import sections from "./sections";

import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss"


class Directory extends Component{
        constructor(props) {
                super(props);
                this.state = {
                        sections : sections
                }
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


export default Directory;

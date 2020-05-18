import React from "react";

import "./custom-button.styles.scss";

export default function CustomButton({children, ...otherProps}) {
    console.log("props from button", children);
    return(
        <button className="custom-button" {...otherProps} >
            {children}
        </button>
        );
}

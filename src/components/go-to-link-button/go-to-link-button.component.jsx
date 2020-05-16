import React from "react";

export default function GoToLinkButton({goToFunc, link, textButton}){
    return(
        <button onClick={() => goToFunc(link)}>
            {textButton}
        </button>
    )
}
import React from "react";

import "./collection-preview.scss";

export default function CollectionPreview({title, collections}) {
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {collections.map(item => (<div key={item.id}>{item.name}</div>))}
            </div>
        </div>
    )
}
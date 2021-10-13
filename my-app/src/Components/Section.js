import React from "react";

function Section ({title, children}) {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Section;
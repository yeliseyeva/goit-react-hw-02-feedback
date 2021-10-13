import React from "react";
import s from "../Section/Section.module.css";

function Section ({title, children}) {
    return (
        <div className={s.Section}>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default Section;
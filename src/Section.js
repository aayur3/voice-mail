import React, { useState } from "react";
import "./Section.css";

function Section({ Icon, title, color, selected }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={`section${selected ? " section--selected" : ""}`}
            style={
                (selected || hovered)
                    ? { borderBottom: `3px solid ${color}`, color: color }
                    : {}
            }
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {Icon && <Icon style={{ marginRight: 8 }} />}
            <h4>{title}</h4>
        </div>
    );
}

export default Section;
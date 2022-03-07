import { useState } from "react";

import { Books } from "./Books";
import { Pens } from "./Pens";
import { Notebooks } from "./Notebooks";
import { Inkpens } from "./Inkpens";

export function Total() {

    const [ total, setTotal ] = useState(0);

    const handleChange = (value) => {
        setTotal( total + (Books + Pens + Notebooks + Inkpens));
    }

    return (
        <div className="total"> { handleChange(1) }</div>
    )
}

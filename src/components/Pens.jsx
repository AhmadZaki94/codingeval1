import { useState } from "react";

export function Pens() {

    const [ pens, setPens ] = useState(0);

    const handleChange = (value) => {
        setPens(pens + value);
    }

    return (

        <div className="items">
            
            <span>Pens: { pens }  </span>
            <button className="addPen" onClick={ () => handleChange(1)}>+</button>
            <button className="remPen" onClick={ () => {
                if(pens >= 1){
                    handleChange(-1);
                }
                }}>-</button>
            <span className="totalPens"> { pens }</span>
            
        </div>
    )

}


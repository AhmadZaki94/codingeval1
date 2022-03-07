import { useState } from "react";

export function Inkpens() {

    const [ inkpens, setInkpen ] = useState(0);

    const handleChange = (value) => {
        setInkpen(inkpens + value);
    }

    return (

        <div className="items">
            
            <span>InkPens: { inkpens }  </span>
            <button className="addInkpen" onClick={ () => handleChange(1)}>+</button>
            <button className="remInkpen" onClick={ () => {
                if(inkpens >= 1){
                    handleChange(-1);
                }
                }}>-</button>
            <span className="totalPens"> { inkpens }</span>
            
        </div>
    )

}


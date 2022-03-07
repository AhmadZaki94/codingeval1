import { useState } from "react";

export function Notebooks() {

    const [ notebooks, setNotebooks ] = useState(0);

    const handleChange = (value) => {
        setNotebooks(notebooks + value);
    }

    return (

        <div className="items">
            
            <span>Notebooks: { notebooks }  </span>
            <button className="addNotebook" onClick={ () => handleChange(1)}>+</button>
            <button className="remNotebook" onClick={ () => {
                if(notebooks >= 1){
                    handleChange(-1);
                }
                }}>-</button>
            <span className="totalNotebooks"> { notebooks }</span>
            
        </div>
    )

}


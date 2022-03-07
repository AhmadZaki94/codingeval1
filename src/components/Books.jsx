import { useState } from "react";

export function Books() {

    const [ books, setBooks ] = useState(0);

    const handleChange = (value) => {
        setBooks(books + value);
    }

    return (

        <div className="items">
            
            <span>Books: { books }  </span>
            <button className="addBook" onClick={ () => handleChange(1)}>+</button>
            <button className="remBook" onClick={ () => {
                if(books >= 1){
                    handleChange(-1);
                }
                }}>-</button>
            <span className="totalBooks"> { books }</span>
            
        </div>
    )

}


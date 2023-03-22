import React, {useState} from "react";

const Input = ({handleSearch, name, placeholder}) => {

    return (
        <>
            <input type="text" placeholder={placeholder} name={name} onChange={handleSearch} />

        </>
    )
}
export default Input

import React from "react";
import {logDOM} from "@testing-library/react";

    const List =({list}) => {
    return (
        <div>{
            list.map((item, index)=>{
                // return console.log(item)
                return(<ul>
                    <li>{item.id}</li>
                    <li>{item.task}</li>
                </ul>)
            })
        }</div>
    )
}
export default List

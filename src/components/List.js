import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import {MdDeleteForever} from 'react-icons/md';
import {AiFillEdit} from 'react-icons/ai';
function List(props){
    const items= props.item;
    const list=items.map(item=>{
        return(
            <div key={item.key} className="list">
                <p>
                    <input type="text" className="text" id={item.key} value={item.text} onChange={(e)=>props.update(e.target.value, item.key)}/>
                </p>
                <div className="icons">
                    <AiFillEdit className="edit-icon" onClick={()=>{document.getElementById(`${item.key}`).focus()}}/>
                    <MdDeleteForever className="delete-icon" onClick={()=>props.delete(item.key)}/>
                </div>
            </div>
        )
    });
    
    return(
        <div>
           <FlipMove duration={300} easing="ease-in-out" >{list}</FlipMove>
        </div>
    )
}
export default List;
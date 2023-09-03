import React  from 'react';
export default function Search(props) {
    return(
        <input type="text" className='searchText' id="searchText" placeholder="Search tasks..." onChange={props.func} value={props.value}/>
    )
}
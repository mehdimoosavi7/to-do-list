export default function Search(props) {
    return(
        <>
            <input type="text" id="searchText" placeholder="Search tasks..." onChange={props.func}/>
            {/* <button type="button" className="search-btn" id="searchButton" onClick={props.func}>Search</button> */}
        </>
    )
}
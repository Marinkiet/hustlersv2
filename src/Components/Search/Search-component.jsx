import React from 'react';
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import './search-styles.css'

function Searchbar() {
    return (

<div className='search'>
<div className="searchContainer">
<SearchOutlined/>
<input 
type="search" 
placeholder="Search..."
/>
</div>

</div>
    )
}
export default Searchbar;
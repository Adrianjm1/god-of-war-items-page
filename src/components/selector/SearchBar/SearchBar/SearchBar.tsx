import './searchbar.css'
export const SearchBar = () => {
    return (
        <div className="search-bar">
            <i className="fa fa-search"></i>
            <input className='input-search' type="text" placeholder="Search" />
        </div>
    );
};
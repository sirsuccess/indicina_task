import "./style.scss"
import searchIcon from "../../assets/search.png"



function Search() {

    return (
        <div className="search">
        <input type="text" placeholder="Search" />
        <img src={searchIcon} alt="search icon" />
        </div>
    )

}

export default Search
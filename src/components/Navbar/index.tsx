import "./style.scss"
import logo from "../../assets/logo.png"
import Search from "../Search/index"
import Profile from "../Profile"



function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="logo"  />
            </div>
            <div className="search-container">
                <Search />
            </div>
            <div className="navbar-right">
                <Profile />
            </div>

        </div>
    )

}

export default Navbar
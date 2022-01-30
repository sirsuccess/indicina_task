import  {useState} from "react"
import "./style.scss"
import Avatar from "../../assets/avatar.png"
import Dropdown from "../../assets/dropdown.png"



function Profile() {

    const [showDropdown, setShowDropdown] = useState(false)

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    return (
        <div className="profile">
        <div className="profile-detail">
        <img src={Avatar} alt="search icon" />
        <h2>John Doe</h2>
        <img src={Dropdown} alt="search icon" onClick={toggleDropdown} className="dropdown-img"/>

        </div>
        <div className={!showDropdown? "dropdown-none" :"dropdown"} onClick={toggleDropdown}>
        Logout
        </div>
        </div>
    )

}

export default Profile
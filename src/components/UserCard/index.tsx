import "./style.scss"




function UserCard({ user, key }:any) {
  const {name, bio, url} = user.node
    return (
        <div className="searchResult-body-right-card" key={key}>
        <span className="searchResult-body-right-card-title">{name}</span>
        <span className="">{url.split("/")[3]}</span>
        <div className="searchResult-body-right-card-bottom">
        {bio?bio:"Null"}
        </div>

      </div>
    )

}

export default UserCard
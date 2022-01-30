import "./style.scss"
import moment from "moment"



function Search({repo, key}:any) {

const {name, description, primaryLanguage, licenseInfo,  stargazers, updatedAt} = repo.node
    return (
        <div className="searchResult-body-right-card" key={key}>
        <div className="searchResult-body-right-card-title">{name}</div>
        <div className="searchResult-body-right-card-sub_title">{description}</div>
        <div className="searchResult-body-right-card-bottom">
          {stargazers.totalCount} Stars | {primaryLanguage.name} | {licenseInfo?licenseInfo.name:"Null"} | Updated { moment(updatedAt).startOf('hour').fromNow()}
        </div>

      </div>
    )

}

export default Search
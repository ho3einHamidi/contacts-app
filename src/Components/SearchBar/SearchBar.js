import "./searchBar.css";
import searchIcon from "../../Icons/search-icon.png";
export function SearchBar({value,onChange}) {
  return (
    <div className="search-bar">
      <div className="wrapper">
        <div className="img-wrapper">

        <img src={searchIcon} className="search-icon" alt="search-icon"></img>
        </div>
        <input value={value} onChange={(e) => onChange(e.target.value)} className="input" type="text" placeholder="Search"></input>
      </div>
    </div>
  );
}

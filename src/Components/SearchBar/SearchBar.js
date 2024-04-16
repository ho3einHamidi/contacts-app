import "./SearchBar.css";
import searchIcon from "../../Icons/search-icon.png";
export function SearchBar() {
  return (
    <div className="search-bar">
      <div className="wrapper">
        <div className="img-wrapper">

        <img src={searchIcon} className="search-icon" alt="search-icon"></img>
        </div>
        <input className="input" type="text" placeholder="Search"></input>
      </div>
    </div>
  );
}

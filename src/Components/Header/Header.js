import "./header.css";
import contactIcon from "../../Icons/contact-icon.png";
import createIcon from "../../Icons/create-icon.svg";
export function Header() {
  return (
    <div className="header">
      <img className="contact-icon" src={contactIcon} alt="contact-icon"></img>
      <p>Contacts</p>
      <img className="create-icon" src={createIcon} alt="create-icon"></img>
    </div>
  );
}

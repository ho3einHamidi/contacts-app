import "./contactsHeader.css"
import createIcon from "../../Icons/create-icon.png";
import chevronLeft from "../../Icons/chevron-left-icon.png"

export function ContactsHeader() {
  return (
    <div className="headers-icons">
      <img className="chevron-left" src={chevronLeft} alt="chevron-left"></img>
      <img className="create-icon" src={createIcon} alt="create-icon"></img>
    </div>
  );
}

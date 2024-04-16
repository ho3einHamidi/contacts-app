import contactsIcon from "../../Icons/contacts-icon.png";

export function Contact({item}){
    return(
        <div key={item.name} className="contact-wrapper">
            <div className="contact">
              <img src={contactsIcon} alt="contacts-icon"></img>
              <div>
                <p>{item.name}</p>
                <p>{item.phone}</p>
              </div>
            </div>
          </div>
    )
}
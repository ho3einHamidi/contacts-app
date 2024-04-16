import { useEffect, useState } from "react";
import "./contacts-list.css";
import contactsIcon from "../../Icons/contacts-icon.png";
import axios from "axios";
export function ContactList() {
  const [contacts, setContacts] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setContacts(res.data));
  }, []);

  return (
    <>
      {contacts?.map((item) => {
        return (
          //TODO fix name parent
          //TODO make a contact component

          <div className="contacts-wrapper">
            <div key={item.name} className="contact">
              <img src={contactsIcon} alt="contacts-icon"></img>
              <div>
                <p>{item.name}</p>
                <p>{item.phone}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

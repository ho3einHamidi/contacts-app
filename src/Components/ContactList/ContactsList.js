import "./contacts-list.css";

import { Contact } from "../Contact/Contact";
export function ContactList({contacts}) {
  return (
    <>
      {contacts?.map((item) => {
        return (
          <Contact key={item.name} item={item} />
        );
      })}
    </>
  );
}

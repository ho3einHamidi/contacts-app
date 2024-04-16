import { useEffect, useState } from "react";

import "./App.css";
import { ContactList } from "./Components/ContactList/ContactsList";
import { Header } from "./Components/Header/Header";
import { SearchBar } from "./Components/SearchBar/SearchBar";
import axios from "axios";
import { dataApiFormatter } from "./utils/dataApiFormatter/dataApiFormatter";
function App() {
  const [contacts, setContacts] = useState(null);
  const [searchValue,setSearchValue] = useState("");

  const filteredContact = contacts?.filter(contact => contact.name.toLowerCase().includes(searchValue.toLowerCase()) || contact.phone.includes(searchValue))
  const onSearch = (value) => {
    setSearchValue(value)
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setContacts(dataApiFormatter(res.data)));
  }, []);

  return (
    <div className="app">
      <Header />
      <SearchBar onChange={onSearch} value={searchValue} />
      <ContactList contacts={filteredContact} />
    </div>
  );
}

export default App;

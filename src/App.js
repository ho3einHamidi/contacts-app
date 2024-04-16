import "./App.css";
import { ContactList } from "./Components/Contact/ContactsList";
import { Header } from "./Components/Header/Header";
import { SearchBar } from "./Components/SearchBar/SearchBar";
function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <ContactList/>
    </div>
  );
}

export default App;

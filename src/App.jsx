import axios from "axios";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactList from "./components/ContactList/ContactList.jsx";
import "./App.css";

axios.defaults.baseURL = "https://6662d95562966e20ef0a473b.mockapi.io";

function App() {
  return (
    <div className={CSS.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;

import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice.js";
import CSS from "./ContactList.module.css";
import Contact from "../Contact/Contact.jsx";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {contacts.map((contact) => (
        <li className={CSS.listitem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

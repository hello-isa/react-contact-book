import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContactData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContacts(data);
      });
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  const handleAddContact = () => {};

  return (
    <>
      <div className="contactForm">
        <input type="text" placeholder="Name"></input>
        <input type="text" placeholder="Email"></input>
        <input type="number" placeholder="Phone Number" min={1}></input>
        <button onClick={handleAddContact}>Add Contact</button>
      </div>

      <div className="contactList">
        {contacts.map((contact) => (
          <ul key={contact.id}>
            <li>{contact.name}</li>
            <li>{contact.email}</li>
            <li>{contact.phone}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;

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

  return (
    <>
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

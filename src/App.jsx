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

  const handleAddContact = () => {
    const id = parseInt(document.getElementById("id").elements[0].value);
    const name = document.getElementById("name").elements[0].value;
    const email = document.getElementById("email").elements[0].value;
    const number = parseInt(
      document.getElementById("number").elements[0].value
    );

    if (!id || !name || !email || !number) {
      alert("All fields are required.");
      return;
    }
  };

  return (
    <>
      <div className="contactForm">
        <input type="number" placeholder="ID" id="id" min={1}></input>
        <input type="text" placeholder="Name" id="name"></input>
        <input type="text" placeholder="Email" id="email"></input>
        <input
          type="number"
          placeholder="Phone Number"
          min={1}
          id="number"
        ></input>
        <button onClick={handleAddContact}>Add Contact</button>
      </div>

      <div className="contactList">
        {contacts.map((contact) => (
          <ul key={contact.id}>
            <li>{contact.id}</li>
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

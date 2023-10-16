import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [searchId, setSearchId] = useState("");

  const fetchContactData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data));
  };

  useEffect(() => {
    fetchContactData();
  }, []);

  const handleAddContact = () => {
    if (!id || !name || !email || !phone) {
      alert("All fields are required.");
      return;
    }

    if (contacts.some((contact) => contact.id == id)) {
      alert("ID must be unique.");
      return;
    }

    // Create a new contact object
    const newContact = { id, name, email, phone };
    setContacts((prevContacts) => [...prevContacts, newContact]);

    // Clear fields after adding a new contact
    setId("");
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleDeleteContact = (id) => {
    const deletedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(deletedContacts);
  };

  const handleSearchContact = () => {
    const searchResult = contacts.filter((contact) => contact.id == searchId);
    setContacts(searchResult);
  };

  return (
    <>
      <h1>Contact Book</h1>
      <div>
        <input
          type="number"
          placeholder="ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearchContact}>Search Contact</button>
      </div>
      <hr />

      <div className="contactForm">
        <input
          type="number"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          min={1}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          min={1}
        />
        <button onClick={handleAddContact}>Add Contact</button>
      </div>
      <hr />

      <div className="contactList">
        {contacts.map((contact) => (
          <ul key={contact.id}>
            <li>ID: {contact.id}</li>
            <li>Name: {contact.name}</li>
            <li>Email: {contact.email}</li>
            <li>Phone: {contact.phone}</li>
            <button onClick={() => handleDeleteContact(contact.id)}>
              Delete Contact
            </button>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;

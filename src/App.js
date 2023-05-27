import './App.css';
import React, { useState } from 'react';
import contacts from './contacts.json';

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contacts.filter((contact) => !contactList.includes(contact));
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    setContactList((prevContactList) => [...prevContactList, randomContact]);
  };

  const sortByName = () => {
    const sortedContacts = [...contactList].sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contactList].sort((a, b) => b.popularity - a.popularity);
    setContactList(sortedContacts);
  };

  const removeContact = (contactId) => {
    const updatedContacts = contactList.filter((contact) => contact.id !== contactId);
    setContactList(updatedContacts);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <button onClick={addRandomContact}>Agregar contacto aleatorio</button>
      <button onClick={sortByName}>Ordenar por nombre</button>
      <button onClick={sortByPopularity}>Ordenar por popularidad</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Ganó un Oscar</th>
            <th>Ganó un Emmy</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {contactList.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} style={{ width: '50px' }} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🏆' : ''}</td>
              <td>
                <button onClick={() => removeContact(contact.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

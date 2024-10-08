import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '0476 75 48 75'}
  ]) 
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (n) => {
    setNumber(n.target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Check if the name already exists in the persons array
    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase());
    
    if (nameExists) {
      alert(`"${newName}" is already added to the phonebook.`);
    } else if (newName) {
      // Add the new name to the persons array
      setPersons(persons.concat({ name: newName, number:  number}));
      setNewName(''); // Reset the input field
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleInputChange} />
        </div>
        <div>number: <input value={number} onChange={handleNumber}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map((person, index) => (
            <li key={index}>{person.name} : {person.number}</li>
          ))}
        </ul>
    </div>
  )
}

export default App
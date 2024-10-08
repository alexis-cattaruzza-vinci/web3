import { useState, useEffect } from 'react';
import { fetchPersons, addPerson} from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');

  // Fetch data from the server when the component mounts
  useEffect(() => {
    const getPersons = async () => {
      try {
        const fetchedPersons = await fetchPersons();
        setPersons(fetchedPersons);
      } catch (error) {
        // Handle any error that may occur during fetching
        console.error('Error fetching persons:', error);
      }
    };

    getPersons();
  }, []);

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumber = (event) => {
    setNumber(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    const nameExists = persons.some(person => person.name.toLowerCase() === newName.toLowerCase());

    if (nameExists) {
      alert(`"${newName}" is already added to the phonebook.`);
    } else if (newName && number) {
      const newPerson = { name: newName, number: number };

      try{
        const addedPerson = await addPerson(newPerson);
        setPersons(persons.concat(addedPerson));
        setNewName('');
        setNumber('');
      }catch (error) {
        console.error('Error adding person:', error);
        alert('Failed to add person. Please try again.')
      }
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          Name : <input value={newName} onChange={handleInputChange} />
        </div>
        <div>
          Number : <input value={number} onChange={handleNumber} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{person.name}: {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
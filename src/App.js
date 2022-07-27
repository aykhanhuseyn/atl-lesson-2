import { useState } from "react";
import "./App.css";

const INITIAL_VALUE = [
  {
    name: "John",
    year: 1990,
  },
  {
    name: "Jack",
    year: 1988,
  },
  {
    name: "James",
    year: 1999,
  },
];

function App() {
  const [people, setPeople] = useState(INITIAL_VALUE);
  const [name, setName] = useState("");
  const [year, setYear] = useState(0);

  const handleAddPerson = (event) => {
    event.preventDefault();
    if (name && year) {
      const newPerson = { name, year };
      setPeople([...people, newPerson]);
      setName("");
      setYear(0);
    }
  };

  return (
    <div className="App">
      <form onSubmit={(e) => handleAddPerson(e)}>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="text"
          value={year}
          onChange={(event) => {
            const parsed = parseInt(event.target.value.replaceAll(/\D/g, ""));

            if (parsed <= 9999) {
              setYear(parsed);
            }
          }}
        />
        <button type="submit">add person</button>
      </form>

      <ul>
        {people.map((person, index) => {
          return (
            <li>
              {person.name} - {person.year}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

import { useState } from "react";
import { Person } from "./Person";
import { Header } from "./Header";
import { MyClass } from "./MyClass";
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
      <Header />

      {year % 2 ? (
        <MyClass
          classProp="classPropsIsHere"
          handleAddPerson={handleAddPerson}
        />
      ) : (
        ""
      )}

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
        {people.map((element, index) => {
          return (
            <Person
              key={index}
              name={element.name}
              year={element.year}
              // timespan Date.now()
              // since 1 yan 1970
              // in microseconds
              malikmammad="malikmammad"
              pepperPots="pepper"
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;

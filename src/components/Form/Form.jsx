import { nanoid } from 'nanoid';
import { useState } from 'react';


export const Form = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleChange = ({ target: { name, age } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'age':
        setAge(value);
        break;
      default:
        break;
    }
    };
    
    const onFormSubmit = (e) => {
        e.preventdefault();

        const newUser = {
            name,
            age,
            id: nanoid(),
        }
}



  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Age
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

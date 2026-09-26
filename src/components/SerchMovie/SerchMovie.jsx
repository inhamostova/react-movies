import { useState } from 'react';

export const SearchMovie = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = evt => {
    setSearchQuery(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label htmlFor="">
        <input type="text" value={searchQuery} onChange={handleChange} />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

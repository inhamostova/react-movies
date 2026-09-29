import { useState } from 'react';
import { Btn, Form, Input } from './SerchMovie.styled';
import { FaSearch } from 'react-icons/fa';

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
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Input type="text" value={searchQuery} onChange={handleChange} />

      <Btn type="submit">
        <FaSearch />
      </Btn>
    </Form>
  );
};

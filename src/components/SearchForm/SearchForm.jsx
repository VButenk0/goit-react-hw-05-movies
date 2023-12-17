import React, { useState } from 'react';
import { StyledSearchForm } from './SearchForm.styled';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const SearchForm = () => {
  const [search, setSearch] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    setSearch(query ?? '');
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!search) {
      setSearchParams({});
      return;
    }
    setSearchParams({ query: search });
  };

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  return (
    <>
      <StyledSearchForm onSubmit={handleSubmit}>
        <input
          name="search"
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Type your movie"
        />
        <button>&#x1F50E;&#xFE0E;</button>
      </StyledSearchForm>
    </>
  );
};

export default SearchForm;

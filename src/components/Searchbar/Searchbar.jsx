import React from 'react';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import {
  Searchbar,
  SearchFormButton,
  SearchForm,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import toast from 'react-hot-toast';

export const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = evt => {
    evt.preventDefault();
    const searchQuery = evt.target.elements[1].value.toString();

    if (searchQuery === '') {
      toast('Please insert some text for search');
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <Searchbar>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchFormButton type="submit">
          <BsSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus={true}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Searchbar>
  );
};

SearchBar.propTypes = { onSubmit: PropTypes.func };

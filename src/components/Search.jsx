import React from 'react';
import { Formik, Form, Field } from 'formik';

import {ReactComponent as SearchIcon} from '../assets/icons/search.svg';

function SearchBar ({ onSubmit }){
  return (
    <Formik
      initialValues={{ searchQuery: '' }}
      onSubmit={(values) => onSubmit(values.searchQuery)}
    >
      {({ isSubmitting }) => (
        <Form className='searchInput'>
            <label htmlFor="search"><SearchIcon/></label>
            <Field type="text" name="searchQuery" placeholder="Search..." id="search" />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
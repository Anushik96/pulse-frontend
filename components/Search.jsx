import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Image from 'next/image';

function SearchBar ({ onSubmit }){
  const [showInput, setShowInput] = useState(false)
  const hendleShowInput = () =>{
    setShowInput(!showInput)
  }
  return (
    <Formik
      initialValues={{ searchQuery: '' }}
      onSubmit={(values) => onSubmit(values.searchQuery)}
    >
      {({ isSubmitting }) => (
        <Form className={`searchInput ${showInput && 'active'}`}>
            <label htmlFor="search" onClick={hendleShowInput}><Image src="/icons/search.svg" alt="" /></label>
            <Field type="text" name="searchQuery" placeholder="Search..." id="search" />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
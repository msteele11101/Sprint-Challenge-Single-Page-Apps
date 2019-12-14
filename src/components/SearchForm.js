import React, { useState } from "react";
import styled from "styled-components";

const InputStyle = styled.input`
  background: #e2e25a;
  color: #6fb03e
`;

function SearchForm(props) {
  const [results, setResults] = useState();

  const handleChanges = e => {
    setResults(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const filtered = props.characters.filter(char => {
      return char.name.toLowerCase().indexOf(results.toLowerCase()) !== -1;
    });
    props.search(filtered);
    console.log(filtered);
  };

  return (
    <section className="search-form">
      <form onSubmit={submitHandler}>
        <InputStyle
          onChange={handleChanges}
          type="text"
          name="character"
          id="character"
          placeholder="Search"
        ></InputStyle>
      </form>
    </section>
  );
}

export default SearchForm;

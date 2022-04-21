import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "../context_57";

const SearchForm_xx = () => {
  const { setSearcheTerm } = useGlobalContext();
  const searchValue = useRef("");

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearcheTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            ref={searchValue}
            type="text"
            name="name"
            id="name"
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm_xx;

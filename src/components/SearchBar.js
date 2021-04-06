import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ search }) => {

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    search(input);
  }

  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Search for a Video</label>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
        </div>
      </form>
    </div>
  );
}
 
export default SearchBar;
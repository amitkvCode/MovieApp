import React from 'react'

const Search = ({searchTerm , setsearchTerm}) => {
  return (
    <div className="search">
      <div>
        <img src="search.png" alt="Search" />
        <input 
        type="text"
        placeholder='Serach thoungh thousands of movies'
        value={searchTerm}
        onChange={(event)=> setsearchTerm(event.target.value)}
        />
      </div>
    </div>
  )
}

export default Search
import React from 'react'

const Search = () => {
  return (
    <div className='search_section_main'>
      <div className='search_section_context' >
        <h1 className='search_title'>Не оставим наедине с проблемами</h1>
        <form action="#" className='search_section_input_button'>
          <input type="search" className='search_section_input' placeholder="Чем вам помочь?"/>
          <button type="submit" className='search_section_button'>→</button>
        </form>
      </div>
    </div>
  )
}

export default Search
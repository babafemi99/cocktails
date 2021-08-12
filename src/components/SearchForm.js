import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = ({setSearchTerm}) => {

  React.useEffect(()=>(
    searchValue.current.focus()
  ),[])
  const searchValue = React.useRef('');

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  const searchCocktail = ()=>{
    setSearchTerm (searchValue.current.value);
  }

  return (
    <section className="section">
      <h2 className="section-title">Search Cocktails</h2>
      <form className="form search-form" onSubmit ={handleSubmit} >
        <div className="form-control">
          <label htmlFor="name">Search here</label>
          <input type="text" name ='name' id ='name' onChange = {searchCocktail}  ref = {searchValue}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm

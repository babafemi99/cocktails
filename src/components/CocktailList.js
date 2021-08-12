import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { findAllByTitle } from '@testing-library/react'

const CocktailList = (props) => {
  const {cocktails,loading} = props
  if (loading){
    return <h2 className="section-title">Loading loading loading din <din className=""></din></h2>
  }
  if (cocktails.length <1){
    return <h2 className = 'section-loading'>
      No results found !
    </h2>
  }
  return (
    <section className="section">
      <h2 className="section-title">
        Cocktails
      </h2>
      <div className="cocktails-center">
        {cocktails.map(item=>{
          return  <Cocktail key ={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList

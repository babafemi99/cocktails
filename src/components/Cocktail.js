import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = (props) => {
  const {name, img, info, glass,id} = props
  return (
    <article className="cocktail">
        <div className="img-container">
        <img src={img} alt={name} />
        </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to = {`/cocktail/${id}`} className = 'btm btn-primary btn-details'>
          Details
        </Link>
      </div>
    </article>

  )
}

export default Cocktail

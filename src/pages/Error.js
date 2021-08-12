import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>DEAD END</h1>
        <h2> No results found</h2>
        <Link to ='/' className = 'btn btn-primary'>
          HOME
        </Link>
      </div>
    </section>
  )
}

export default Error

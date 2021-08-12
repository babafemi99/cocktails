import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
// const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {

  const {id} = useParams();
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true);
    async function getCocktail (){
      try {
        const response  = await  fetch (`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await response.json();
        const { drinks } = data;
        
        if (drinks){
       const {
         strDrink: name,
         strDrinkThumb:img,
         strAlcoholic:info,
         strCategory:category,
         strGlass:glass,
         strInstructions:instructions,
         strIngredient1,
         strIngredient2,
         strIngredient3,
         strIngredient4,
         strIngredient5,
         
         
       } = data.drinks[0];
       const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5]

       const newCocktail = {name,img,category,glass,instructions,ingredients,info}
       setCocktail(newCocktail);

        }else{
          setCocktail([null])
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false)
    }
    getCocktail();
  }, [id])

    if (loading){
      return <h2 className="section-title">
        Loading din din Loading ....
      </h2>
    }
    if (!cocktail){
      return <h2 className="section-title">
        No cocktail  
      </h2>
    }
    else {
      const { name, img, category,info, glass,instructions,ingredients} = cocktail
      
      return (
        <section className="section cocktail-section">
          <Link to ='/' className = 'btn btn-primary'>
            Home
          </Link>
          <h2 className="section-title">
            {name}
          </h2>
          <div className="drink">
            <img src ={img} alt ={name}/>
            <div className="drink-info">
              <p>name: {name}</p> 
              <p>category: {category}</p> 
              <p>info: {info}</p> 
              <p>glass: {glass}</p> 
              <p>instructions: {instructions}</p> 
              <p>
                ingredients : {
                  ingredients.map((item,idx)=>{
                    return item ? <span key ={idx}>{item}</span> : null
                  })
                }
              </p>

            </div>
            
          </div>
        </section>
      )
    }
    return (
      <div>
        <h2>single cocktail page id ${id}  </h2>
      </div>
    )
}

export default SingleCocktail
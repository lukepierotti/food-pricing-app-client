import React from 'react'
import Ingredient from './Ingredient'

const Recipe = (props) => {

    function filteredName(name) {
    let filter = /[a-zA-Z]+(?![^(]*\))/g
    let filteredString = name.match(filter).join(" ").toLowerCase();
    let replacements = /\b(cup |cups |teaspoon |teaspoons |tablespoon |tablespoons |quart |quarts |pint |pints |dash |pinch |pinches |pound |pounds |tbsp |tsp |fluid oz. |fluid oz |fluid ounce |fluid ounces |kilogram |kilograms |gram |grams |ml |mls |gallon |gallons |gal. |liter |liters |stick |sticks |head )\b/gi
    let prepositions = /\b( a | the | an | of | for )\b/gi
    return filteredString.replace(replacements,"").replace(prepositions," ");            
  }


  return (
    <div>
      <h1>{props.data.name}</h1>
      <h3>{props.data.yield}</h3>
      <h3>{props.data.ingredients ? props.data.ingredients.map(ingredient => <li><Ingredient ingredient={ingredient}/></li>) : null}</h3>
      <p> Recipe Cost: $1</p>
    </div>
  )
}


export default Recipe 
import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,nutrients}) => {
    return(
        <div className={style.recipe}>
             <h1 >{title}</h1>
             <img className={style.image} src={image} alt=""/>
             <p>{Math.round(calories)} calories</p>
             <p>Fats: {Math.round(nutrients.FAT.quantity)}g ; Protein: {Math.round(nutrients.PROCNT.quantity)}g ; 
             Carbs: {Math.round(nutrients.CHOCDF.quantity)}g ; Fibre: {Math.round(nutrients.FIBTG.quantity)}g ; 
             Sugar: {Math.round(nutrients.SUGAR.quantity)}g </p>
             Ingredients
             <ol>
                 {ingredients.map(ingredient =>(
                     <li>{ingredient.text}</li>
                 ))}
             </ol>
        </div>
    );
}

export default Recipe;
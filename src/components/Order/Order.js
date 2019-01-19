import React from 'react';
import classes from './Order.css';

const order = (props) => {

    // const ingredients = Object.keys(props.ingredients)
    //     .map( igKey => {
    //         return [...Array(props.ingredients[igKey])].map((_, i) => {
    //             return <BurgerIngredient key={igKey + i} type={igKey} />
    //         });
    //     })
    //     // flatten array to check if any ingredients
    //     .reduce((arr, el) => {
    //         return arr.concat(el)
    //     }, []);

    const ingredients = [];

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount:props.ingredients[ingredientName]
        });
    }

    const ingredientOutput = ingredients.map( ig => {
        return <span 
            key={ig.name}
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}>
            {ig.name} ({ig.amount})
        </span>
    })

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: ${Number.parseFloat(props.price).toFixed(2)}</p>
        </div>
    );
}

export default order;
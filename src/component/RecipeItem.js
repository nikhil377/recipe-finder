import React, { Component } from 'react';
export default class RecipeItem extends Component {

    render() {
        let { recipe } = this.props;
        console.log("innside recipe item", this.props);

        return (
            <div className="recipe-item">
                <div className="recipe-text">
                    <a href={recipe.href}>
                        <h4>
                            {recipe.title}</h4>
                    </a>
                    <p>{recipe.ingredients}</p>
                </div>
                <img
                    className="recipe-img"
                    src={recipe.thumbnail}
                    alt={recipe.title}>
                </img>
            </div>


        )
    }
}
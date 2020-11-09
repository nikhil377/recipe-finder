import React, { Component } from 'react';
import {favoriteRecipe,unFavoriteRecipe} from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class RecipeItem extends Component {
    constructor(){
        super();
        this.state={
            favorited:false
        }
    }
    favorite(recipe){
        this.props.favoriteRecipe(recipe);
        this.setState({favorited:true});
    }
    unFavorite(recipe){
        let recipeToFilter= recipe;
        let recipeToSend = this.props.recipeItemProps.favoriteRecipes.filter(res=>res!==recipeToFilter);
        console.log("recipe to send",recipeToSend );
        this.props.unFavoriteRecipe(recipeToSend[0]);
        this.props.favoriteRecipe(recipeToSend[0]);
        
        this.setState({favorited:false});
    }
    render() {
        let { recipe } = this.props;
        console.log("innside recipe item", this.props);

        return (
            <div className="recipe-item">
               {
                   this.props.favoriteButton?
                        this.state.favorited || this.props.isChecked?
                        <div className="star" onClick={()=>this.unFavorite(recipe)}>
                            &#9733;
                        </div> 
                    : 
                    <div 
                        className="star"
                        onClick={()=> this.favorite(recipe)}>
                        &#9734;
                    </div>
                   :
                   <div></div>
               }
                
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
function mapDispatchToProps(dispatch){
    return bindActionCreators({ favoriteRecipe,unFavoriteRecipe }, dispatch)
}
function mapStateToProps(state){
    return{
        recipeItemProps:state
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(RecipeItem);
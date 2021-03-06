import React, { Component } from 'react';
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem';
import {Link} from 'react-router-dom';

class FavoriteRecipeList extends Component {
    render() {
        return(
           <div>
              <h4 className="link">
                  <Link to="/">Home</Link>
                </h4>
               <h4> FavoriteRecipeList :</h4>
               {this.props.favoriteRecipe.map((recipe,index)=>{
                   return(
                       <RecipeItem key={index} recipe={recipe}
                       favoriteButton={true} isChecked={true}/>
                   )
               })}
           </div>
        )
    }
}
function mapStateToProps(state){
    return{
        favoriteRecipe:state.favoriteRecipes
    }
}
export default connect(mapStateToProps,null)(FavoriteRecipeList);
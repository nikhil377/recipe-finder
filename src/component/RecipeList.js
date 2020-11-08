import React, { Component } from 'react'
import {connect} from 'react-redux';
import RecipeItem from './RecipeItem';
import {Link} from 'react-router-dom';
class RecipeList extends Component {
    render() {
        console.log("recipeList garlic-->",this.props.state);
        
        return (
            <div>
                { this.props.state.favoriteRecipes.length>0 ?
                    <h4 className="link">
                        <Link to="/favorites">Favorites
                        </Link>
                    </h4>:''
                   }
               {this.props.state.recipes.map((recipes,index)=>{
                   return(
                    <RecipeItem key={index} recipe={recipes}
                    favoriteButton={true}/>
                   )
               })}
            </div>
        )
    }

}
function mapStateToProps(state){
    return{
        state
    };
}
export default connect(mapStateToProps,null)(RecipeList);


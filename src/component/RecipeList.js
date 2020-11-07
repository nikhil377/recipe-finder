import React, { Component } from 'react'
import {connect} from 'react-redux';
// import {setRecipes} from '../actions';
import RecipeItem from './RecipeItem';
class RecipeList extends Component {
    render() {
        console.log("recipeList garlic",this.props.state);
        
        return (
            <div>
               {this.props.state.recipes.map((recipes,index)=>{
                   return(
                    <RecipeItem key={index} recipe={recipes}/>
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


import {combineReducers} from 'redux';
import {SET_RECIPES,FAVORITE_RECIPE, UNFAVORITE_RECIPE} from '../actions';
var uniqueItems=[];
function recipes (state=[],action){
    switch(action.type){
        case SET_RECIPES:
            return action.items;
        default:
            return state;
    }
}
function favoriteRecipes(state=[],action){
    switch(action.type){
        case FAVORITE_RECIPE:
            state=[...state,action.recipe]
            uniqueItems = Array.from(new Set(state))
            return uniqueItems;
        case UNFAVORITE_RECIPE:
            state=uniqueItems.filter(recipe=>recipe===action.recipe);
            return state;
        default:
            return state;

    }
}

const rootReducer =combineReducers({recipes,favoriteRecipes});
export default rootReducer;
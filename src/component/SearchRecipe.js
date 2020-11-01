import React, { Component } from 'react'
import {Form , FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
class SearchRecipe extends Component {
    constructor(props){
        super(props);
        this.state={
            ingredients:'',
            dish: ''
        }
    }
    search(){
        let {ingredients, dish}= this.state;
        const url =`http://recipepuppy.com/api/?i=${ingredients}&q=${dish}`
        console.log(this.state,'url', url);
        fetch(url,{
            method: 'GET',
            headers: {
                "Content-Type": "text/plain"
            }
        }).then(response=>response.json())
        .then(data=>console.log("data",data))
    }
    render() {
        return (
            <Form inline>
                <FormGroup>
                    <ControlLabel>
                        Ingredients
                    </ControlLabel>
                    <FormControl 
                    type="text" 
                    placeholder="farlic, chicken"
                    onChange={event=>this.setState({ingredients:event.target.value})}/>
                </FormGroup>
                {' '}
                <FormGroup>Dish</FormGroup>
                {' '}
                <FormControl
                 type="text" 
                 placeholder="butter chicken"
                 onChange={event=>this.setState({dish:event.target.value})}/>
                {' '}
                <Button onClick={()=>this.search()}>Submit</Button>
            </Form>
        )
    }
}
export default SearchRecipe;

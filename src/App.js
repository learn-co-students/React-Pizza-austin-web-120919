import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const API_URL = 'http://localhost:3000/pizzas'

class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzas: [],
      editPizza: '',
      vegetarian: false,
      id: '',
      topping: 'Pizza Topping',
      size: 'Small' 
    }
  }
  
  componentDidMount(){
    fetch(API_URL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }
  
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm  pizza={this.state.editPizza}
                    topping={this.state.topping}
                    vegetarian={this.state.vegetarian}
                    size={this.state.size}
                    key={this.state.id} 
                    handleSubmit={this.handleSubmit} 
                    handleVegetarian={this.handleVegetarian} />
        <PizzaList pizzas={this.state.pizzas} handleClick={this.handleClick} />
      </Fragment>
    );
  }

  handleClick = (e) => {
    const pizzaId = parseInt(e.target.id,16)
    const pizza = this.state.pizzas.filter(pizza => pizza.id === pizzaId)
    this.setState({
      editPizza: pizza,
      id: pizza[0].id,
      topping: pizza[0].topping,
      vegetarian: pizza[0].vegetarian,
      size: pizza[0].size
    })
    console.log(pizza[0].topping,this.state.topping);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.vegetarian.checked)
    const pizzaId = this.state.id
    fetch(API_URL + `/${pizzaId}`,{
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify({
        topping: e.target.topping.value,
        size: e.target.size.value,
        vegetarian: e.target.vegetarian.checked
      })
    })
    .then(resp => resp.json())
    .then(data => this.getPizzas())
  }

  handleVegetarian = (e) => {
    console.log(e.target.name)
    this.setState({
      vegetarian: !this.state.vegetarian
    })
  }

  getPizzas = () => {
    fetch(API_URL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pizzas: data
      })
    })
  }
}

export default App;

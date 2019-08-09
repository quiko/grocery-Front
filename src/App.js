import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import MealList from "./components/Meal/mealList";
import GroceryItem from "./components/Grocery/groceryItem";
import GroceryList from "./components/Grocery/groceryList";
import CreateMeal from './components/Meal/createMeal';
import CreateGroceries from './components/Grocery/createGroceries';
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/meals/list" component={MealList} />
            <Route path = "/meals/create" component ={ CreateMeal} />
            <Route path="/groceries/list" component={GroceryList} />
            <Route path="/groceries/:id" component={GroceryItem} />
            <Route path ="/meals/:id" component ={CreateGroceries}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

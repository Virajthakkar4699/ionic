import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "R1",
      name: "Pizza",
      imageurl: "https://cdn.pixabay.com/photo/2017/02/15/10/57/pizza-2068272__340.jpg",
      ingredients: ["veggies","sauce","cheese"]
    },
    {
      id: "R2",
      name: "Fries",
      imageurl: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      ingredients: ["potatoes","species"]
    }
  ];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes]
  }

  //for getting single recipe
  getrecipe(recipeId:string){
    return {
      ...this.recipes.find(recipe => { 
        return recipe.id === recipeId;
    })};
  }
  deleteRecipe(recipeId:string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}

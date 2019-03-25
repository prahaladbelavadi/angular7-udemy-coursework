import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];
    addIngredients(ingredient:Ingredient){
        this.ingredients.push(ingredient);
    }
    getIngredients(){
        return this.ingredients.slice()
    }
}
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor() { }
  recipe: Recipe;

  ngOnInit() {
  }
  displayRecipe(content){
    // receives input of selectedrecipe() from recipes component and assign it to recipe-detail to display details in its template file.
  }
}

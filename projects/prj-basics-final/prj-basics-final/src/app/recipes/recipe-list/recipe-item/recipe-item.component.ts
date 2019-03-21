import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  // recipe being received as input here is coming from recipe directive that assigned by the recipeEl at recipe-list.component.html
  @Input() recipe: Recipe;
  
  @Output() recipeSelected = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit() {
  }

  onSelected(){
    this.recipeSelected.emit();
  }
}

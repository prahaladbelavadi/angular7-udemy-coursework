import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This. is a simple test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Pizza_%2822%29.jpg/120px-Pizza_%2822%29.jpg'),
    new Recipe('A test Recipe', 'This. is a simple test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Pizza_%2822%29.jpg/120px-Pizza_%2822%29.jpg'),
    new Recipe('A test Recipe', 'This. is a simple test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Pizza_%2822%29.jpg/120px-Pizza_%2822%29.jpg'),
    new Recipe('A test Recipe', 'This. is a simple test', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Pizza_%2822%29.jpg/120px-Pizza_%2822%29.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}

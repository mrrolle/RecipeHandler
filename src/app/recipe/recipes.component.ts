import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';

import {Recipe}from './recipe';
import {RecipeService }from './recipe.service';

@Component({
  moduleId: module.id,
  selector: 'my-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: [ './recipes.component.css' ]
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  selectedRecipe: Recipe;

  ngOnInit(): void {
    this.getRecipes();
  }

  constructor(
    private recipeService: RecipeService,
    private router: Router) { }

  getRecipes(): void {
    this.recipeService
        .getRecipes()
        .then(recipes => this.recipes = recipes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.recipeService.create(name)
      .then(recipe => {
        this.recipes.push(recipe);
        this.selectedRecipe = null;
      });
  }

  delete(recipe: Recipe): void {
    this.recipeService
        .delete(recipe.id)
        .then(() => {
          this.recipes = this.recipes.filter(r => r !== recipe);
          if (this.selectedRecipe === recipe) { this.selectedRecipe = null; }
        });
  }


  onSelect(recipe: Recipe): void {
    this.selectedRecipe = recipe;
  }

  gotoDetail(): void {
    this.router.navigate(['/recipe/detail', this.selectedRecipe.id]);
  }
}

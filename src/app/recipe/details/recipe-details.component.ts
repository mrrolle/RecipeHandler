import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';
import {Location}from '@angular/common';

import {Recipe}from '../recipe';
import {RecipeService}         from '../recipe.service';

@Component({
  moduleId: module.id,
  selector: 'my-recipes',
  templateUrl: './recipe-details.component.html',
  styleUrls: [ './recipe-details.component.css' ]
})
export class RecipeDetailsComponent implements OnInit {

  recipe: Recipe;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.recipeService.getRecipe(+params['id']))
      .subscribe(recipe => this.recipe = recipe);
  }

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  save(): void {
    this.recipeService.update(this.recipe)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

import{Component, OnInit}from '@angular/core';

import {Hero}from './hero';
import {HeroService}from './hero.service';
import { Recipe}from './recipe/recipe';
import {RecipeService}from './recipe/recipe.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  recipes: Recipe[] = [];

  constructor(private heroService: HeroService, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
    this.recipeService.getRecipes()
      .then(recipes => this.recipes = recipes.slice(1, 5));
  }
}

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}from '@angular/forms';
import {HttpModule}from '@angular/http';

import {AppRoutingModule }from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule }from 'angular-in-memory-web-api';
import {InMemoryDataService }from './in-memory-data.service';
import {InMemoryRecipeDataService}from './recipe/in-memory-recipe-data.service';


import {AppComponent}from './app.component';
import {DashboardComponent}from './dashboard.component';
import {HeroesComponent }from './heroes.component';
import {HeroDetailComponent}from './hero-detail.component';
import {HeroService}from './hero.service';
import {HeroSearchComponent}from './hero-search.component';
import {RecipesComponent}from './recipe/recipes.component';
import {RecipeDetailsComponent}from './recipe/details/recipe-details.component';
import {RecipeService }from './recipe/recipe.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    InMemoryWebApiModule.forRoot(InMemoryRecipeDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    RecipesComponent,
    RecipeDetailsComponent
  ],
  providers: [ HeroService, RecipeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

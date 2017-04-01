import{NgModule}from'@angular/core';
import {RouterModule, Routes}from '@angular/router';

import {DashboardComponent}from './dashboard.component';
import {HeroesComponent }from './heroes.component';
import {HeroDetailComponent}from './hero-detail.component';
import {RecipesComponent}from './recipe/recipes.component';
import {RecipeDetailsComponent}from './recipe/details/recipe-details.component';

const routes: Routes = [
{path: '', redirectTo: '/dashboard', pathMatch: 'full'
},
{path: 'dashboard',  component: DashboardComponent},
{path: 'detail/:id', component: HeroDetailComponent},
{path: 'heroes',     component: HeroesComponent},
{path: 'recipes',     component: RecipesComponent},
{path: 'recipe/detail/:id',     component: RecipeDetailsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

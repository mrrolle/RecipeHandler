import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1>
            <h2>{{recipe.name}}</h2>
            <div><label>id: </label>{{recipe.id}}</div>
            <div>
              <label>name: </label>
              <input [(ngModel)]="recipe.name" placeholder="name">
            </div>
            <h2>My recipes</h2>
            <ul class="recipes">
              <li *ngFor="let recipe of recipes">
                <span class="badge">{{recipe.id}}</span> {{recipe.name}}
              </li>
            </ul>
            `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .recipes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .recipes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .recipes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .recipes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .recipes .text {
    position: relative;
    top: -3px;
  }
  .recipes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
const RECIPES : Recipe[] = [
  { id: 11, name: 'Pannkakor' },
  { id: 12, name: 'Ärtsoppa' }
]
export class AppComponent  {
  title = 'Recipe Manager';
  recipe: Recipe = {
    id: 1,
    name: 'Korvstroganof'
  }
  recipes: RECIPES;
}
export class Recipe {
  id: number;
  name: string;
}

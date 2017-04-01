import{InMemoryDbService}from'angular-in-memory-web-api';
export class InMemoryRecipeDataService implements InMemoryDbService {
createDb() {
    let recipes = [
      {id: 11, name: 'Taccos'},
      {id: 12, name: 'Spaghetti och köttbullar'},
      {id: 13, name: 'Spenatsoppa'},
      {id: 14, name: 'Palt'},
      {id: 15, name: 'Ärtsoppa'},
      {id: 16, name: 'Pannkaka'},
      {id: 17, name: 'Fiskpinnar'},
      {id: 18, name: 'Suchi'},
      {id: 19, name: 'Pizza'},
      {id: 20, name: 'Tonfisksallad'}
    ];
    return {recipes};
  }
}

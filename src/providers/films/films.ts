import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FilmsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilmsProvider {

  private URL:string = 'http://api.myjson.com/bins/x5g4x';

  constructor(private http: HttpClient) {
  }

  getFilms(){
    return this.http.get(this.URL)
  }
}

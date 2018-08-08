import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myFilms;
  constructor(private _http:HttpClient, public navCtrl: NavController) {
    this.myFilms = this._http.get('http://api.myjson.com/bins/x5g4x');
  }

}

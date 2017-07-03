import { Injectable } from '@angular/core';
import { Restaurant } from "app/restaurants/cards-restaurant/restaurant-model";

import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { BASE_API } from "app/base-api";
import 'rxjs/add/operator/map';

@Injectable()
export class RestaurantService {


  constructor(private _http: Http) {

  }

  get restaurants(): Observable<Restaurant[]> {
    return this._http.get(`${BASE_API}/restaurants`)
      .map(response => response.json() as Restaurant[]);
  }
}
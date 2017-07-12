import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestaurantService } from "app/restaurants/restaurant.service";
import { Restaurant } from "app/restaurants/cards-restaurant/restaurant-model";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import * as _ from 'lodash';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/combineLatest';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {

  restaurant: Restaurant;

  private _subscription: Subscription;

  constructor(private _restaurantService: RestaurantService, private _activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activeRoute.params.map(params => _.get(params, 'id'))
      .subscribe((id: string) => this._restaurantService.findOneById(id)
        .subscribe((restaurant: Restaurant) => this.restaurant = restaurant));


  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }


}

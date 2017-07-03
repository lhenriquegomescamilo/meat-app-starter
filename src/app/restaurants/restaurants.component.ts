import { Component, OnInit, OnDestroy } from '@angular/core';
import { Restaurant } from "app/restaurants/cards-restaurant/restaurant-model";
import { RestaurantService } from "app/restaurants/restaurant.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [RestaurantService]
})
export class RestaurantsComponent implements OnInit, OnDestroy {


  restaurants: Restaurant[] = [];
  private _subscriptionRestaurantService: Subscription;

  constructor(private _restaurantService: RestaurantService) { }
 
  ngOnInit(): void {
    this._subscriptionRestaurantService = this._restaurantService
      .restaurants
      .subscribe((restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
      })
  }
  ngOnDestroy(): void {
    this._subscriptionRestaurantService.unsubscribe();
  }

}

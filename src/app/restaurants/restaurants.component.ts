import { Component, OnInit } from '@angular/core';
import { Restaurant } from "app/restaurants/cards-restaurant/restaurant-model";
import { RestaurantService } from "app/restaurants/restaurant.service";

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
  providers: [RestaurantService]
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private _restaurantService: RestaurantService) { }

  ngOnInit() {
    this._restaurantService
      .restaurants
      .subscribe((restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
      })
  }

}

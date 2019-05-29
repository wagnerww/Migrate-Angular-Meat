import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RestaurantsService } from "app/restaurants/restaurants.service";
import { Restaurant } from "app/restaurants/restaurant/restuarant.model";

@Component({
  selector: "mt-restaurant-detail",
  templateUrl: "./restaurant-detail.component.html",
  styleUrls: ["./restaurant-detail.component.css"]
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.restaurantsService
      .restaurantById(this.route.snapshot.params["id"])
      .subscribe(restaurant => (this.restaurant = restaurant));
  }
}

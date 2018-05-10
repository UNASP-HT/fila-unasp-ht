import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { tap, switchMap, filter } from "rxjs/operators";

import { Observable } from "rxjs/Observable";
import { Restaurant } from "./blank-test-content/blank-teste-content.model";
import { SB_API } from "../../app.api";

@Injectable()
export class RestaurantsService {

    restaurant: Restaurant
    constructor(private http: HttpClient) { }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${SB_API}`)
    }

    addRestaurant(restaurantName: string, categoryName: string, 
                  timeInput:string, starsInput: string): Observable<Restaurant> {
                    alert("oi2" + "restaurantName :" + restaurantName + " categoryName :" + 
                    categoryName + " timeInput: " + timeInput + " starsInput: " + starsInput)
                    
        return this.http
            .post<Restaurant>(`${SB_API}`, { name: restaurantName, category: categoryName,
                deliveryEstimate: timeInput, rating: starsInput, imagePath: 'https://i.imgur.com/RXXFUPZ.jpg' })
                .pipe(
                    tap(x => this.restaurant = x))           
    }
}

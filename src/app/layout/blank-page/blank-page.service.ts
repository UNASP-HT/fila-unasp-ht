import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { Observable } from "rxjs/Observable";
import { Restaurant } from "./blank-test-content/blank-teste-content.model";
import { SB_API } from "../../app.api";

@Injectable()
export class RestaurantsService {

    restaurant: Restaurant
    constructor(private http: HttpClient) { }

    // restaurants(): Observable<Restaurant[]> {
    //     return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
    // }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`${SB_API}`)
    }

    login(email: string, password: string): Observable<Restaurant> {
        return this.http
            .post<Restaurant>(`${SB_API}/register`, { email: email, password: password })
            .do(user => this.restaurant = user);
    }
}
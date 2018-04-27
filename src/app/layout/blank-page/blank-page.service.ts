import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from "rxjs/Observable";
import { Restaurant } from "./blank-test-content/blank-teste-content.model";

@Injectable()
export class RestaurantsService {

    constructor(private http: HttpClient) { }

    // restaurants(): Observable<Restaurant[]> {
    //     return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`)
    // }

    restaurants(): Observable<Restaurant[]> {
        return this.http.get<Restaurant[]>(`http://www.json-generator.com/api/json/get/caxBciYiyG?indent=2`)
    }
}
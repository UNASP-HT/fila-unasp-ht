import { Component, OnInit } from '@angular/core';
import { Restaurant } from './blank-test-content/blank-teste-content.model';
import { RestaurantsService } from './blank-page.service';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {

    restaurants: Restaurant[]

    constructor(private restaurantsService: RestaurantsService) {}

    ngOnInit() {
        this.restaurantsService.restaurants()
        .subscribe(restaurants => this.restaurants = restaurants)
    }

    login() {
        this.restaurantsService.login(this.loginForm.value.email, this.loginForm.value.password)
          .subscribe(user => this.restaurantsService.notify(`Bem vindo, ${user.name}!`))
      }
}

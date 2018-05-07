import { Component, OnInit } from '@angular/core';
import { Restaurant } from './blank-test-content/blank-teste-content.model';
import { RestaurantsService } from './blank-page.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {

    signUpForm: FormGroup;
    restaurants: Restaurant[]

    constructor(private fb: FormBuilder, private restaurantsService: RestaurantsService) {}

    ngOnInit() {

        this.signUpForm = this.fb.group({
            name: this.fb.control('', [Validators.required]),
            email: this.fb.control('', [Validators.required, Validators.email]),
            password: this.fb.control('', [Validators.required])
          });

        this.restaurantsService.restaurants()
        .subscribe(restaurants => this.restaurants = restaurants)
    }

}

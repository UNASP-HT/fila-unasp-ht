import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from './blank-teste-content.model';

@Component({
  selector: 'app-blank-test-content',
  templateUrl: './blank-test-content.component.html',
  styleUrls: ['./blank-test-content.component.scss']
})
export class BlankTestContentComponent implements OnInit {

  @Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}

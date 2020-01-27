import { Component, OnInit, Input } from '@angular/core';
import { Weather } from './../../api/weather';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() place: Weather

  constructor() { }

  ngOnInit() {
    console.log(this.place);
  }

  getStatus(value: any) :string{
    return  (value - 273.15) <= 5 ? 'blue' : (value - 273.15) > 25 ? 'red' : 'orange';
  }
}

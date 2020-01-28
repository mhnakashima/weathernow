import { Component, OnInit, Input } from '@angular/core';
import { Weather } from './../../api/weather';
import { UtilsService } from './../../utils/utils.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() place: Weather

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {}

  getStatus(value: any) :string{
    return  (value - 273.15) <= 5 ? 'blue' : (value - 273.15) > 25 ? 'red' : 'orange';
  }

  getPlace() :void{
    if(this.place.name){

      this.place.isLoading = true;
      this.utilsService.getPlace(this.place.name).then(
        (response) => {
          this.place = response as Weather;
          this.place.date =  new Date();
          this.place.isLoading = false;
        }
      )
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Weather } from '../api/weather';
import { UtilsService } from '../utils/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  places = ["Nuuk,GL", "Urubici,BR", "Nairobi,KE"];
  cardplaces = [];
  interval: any;
  isRefreshing = false;

  constructor(
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.resetPlaces();
    this.getPlaces();
    this.setRefreshTimer();
  }

  getPlaces(): void{

    if (this.isRefreshing) {
      this.places.forEach((key) => {

        let weather = new Weather();
        weather.isLoading = true;

        this.utilsService.getPlace(key)
          .then(response => {

            weather = response as Weather;
            weather.date = new Date();
            weather.isError = false;
            weather.isLoading = false;
            this.cardplaces.push(weather);

          })
          .catch(error => {

            weather.name = key;
            weather.isError = true;
            weather.isLoading = false;
            this.cardplaces.push(weather);
          })
      })
    }
  }

  setPlaceValue(name: string, value: any) {
    this.utilsService.setPlaceValue(name, value);
  }

  getPlaceValue(name: string): Weather {
    return this.utilsService.getPlaceValue(name) as Weather;
  }


  resetPlaces(): void {
    this.isRefreshing = true;
    this.cardplaces = [];
  }

  setRefreshTimer(): void {
    this.interval = setInterval(() => {
      this.resetPlaces();
      this.getPlaces();
    }, 60000)
  }
}
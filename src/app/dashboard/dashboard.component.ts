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

  getPlaces(): void {

    if (this.isRefreshing) {
      this.places.forEach((key) => {
        this.utilsService.getPlace(key)
          .then(response => {

            let weatherNow:Weather = response as Weather;
            weatherNow.date = new Date();

            this.isRefreshing = false;
            this.cardplaces.push(response);

          })
          .catch(error => {
            this.isRefreshing = false;
            alert(error.message ? error.message : "Erro desconhecido");
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
    }, 600000)
  }
}
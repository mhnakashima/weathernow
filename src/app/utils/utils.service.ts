import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const endpoint = "http://api.openweathermap.org/data/2.5/weather?";
export const appkey = "8be7ee4797cba4ef94749261a61f3ef0";

@Injectable({
  providedIn: 'root'
})

export class UtilsService {

  constructor(
    private http: HttpClient
  ) { }

  getPlace(place: string = 'Betim'): Promise<any> {

    const urlsearch = `${endpoint}` + "q=" + `${place}` + "&appid=8be7ee4797cba4ef94749261a61f3ef0";
    return this.http.get(urlsearch).toPromise();
  }

  setPlaceValue(name: string, value: any): void {
    window.localStorage.setItem(name, JSON.stringify(value));
  }

  getPlaceValue(name: string): any {
    return window.localStorage.getItem(name);
  }

}

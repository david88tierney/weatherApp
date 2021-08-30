import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location){
      return this.http.get(
          'http://api.weatherstack.com/current?access_key=51261c8ee95e501f33aba290d23e9182&query=' + 22204
      );
  }
}

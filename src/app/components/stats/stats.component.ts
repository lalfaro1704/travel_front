import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/services.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  currentJustify = 'start';
  trips: JSON;
  buses: JSON;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadTrips();
    this.loadBuses();
  }

  loadTrips(){
    this.apiService.getTripStats().subscribe(
      data => {
        this.trips = data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  loadBuses(){
    this.apiService.getBusStats().subscribe(
      data => {
        this.buses = data;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}

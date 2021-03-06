import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/services.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss']
})
export class TravelComponent implements OnInit {
  trips: JSON;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadTrips();
  }

  loadTrips(){
    this.apiService.getTrips().subscribe(
      data => {
        this.trips = data['results'];
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  deleteTrip(id) {
    console.log(id);
  }

}

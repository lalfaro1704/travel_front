import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/services.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.scss']
})
export class BusComponent implements OnInit {
  buses: JSON;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadBuses();
  }

  loadBuses(){
    this.apiService.getBuses().subscribe(
      data => {
        this.buses = data['results'];
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  deleteBus(id) {
    console.log(id);
  }

}

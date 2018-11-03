import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/services.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  drivers: JSON;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadDrivers();
  }

  loadDrivers(){
    this.apiService.getDrivers().subscribe(
      data => {
        this.drivers = data['results'];
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  deleteDriver(id) {
    console.log(id);
  }

}

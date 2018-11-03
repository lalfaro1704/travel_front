import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/services.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  trips: JSON;
  showDatepicker = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

  myTripHandler(value){
    this.showDatepicker = true;
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GlobalService } from './global.service';

@Injectable()
export class ApiService {

    constructor(private http: HttpClient, private globalService: GlobalService) { }

    getBuses(): Observable<any>{
        return this.http.get<any>(this.globalService.baseUrl + '/travel/api/bus/');
    }

    getUsers(): Observable<any>{
        return this.http.get<any>(this.globalService.baseUrl + '/users/api/user/');
    }

    getDrivers(): Observable<any>{
        return this.http.get<any>(this.globalService.baseUrl + '/travel/api/driver/');
    }

    getTrips(): Observable<any>{
        return this.http.get<any>(this.globalService.baseUrl + '/travel/api/trip/');
    }

    getTripStats(): Observable<any>{
        return this.http.get<any>(this.globalService.baseUrl + '/travel/api/tripstats/');
    }

    getBusStats(): Observable<any>{
        return this.http.get<any>(this.globalService.baseUrl + '/travel/api/busstats/');
    }

}

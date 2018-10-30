import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalService } from '../../services/global.service';


@Injectable()
export class AuthenticationService  {

    constructor(private http: HttpClient, private globalService: GlobalService) { }

    private baseUrl = this.globalService.baseUrl + '/hxc/api/login_token/';

    login(username: string, password: string): Observable<any> {
        return this.http.post<any>(this.baseUrl, { username: username, password: password })
        .pipe(map(data => {
            if (data && data.token) {
                //store user details to keep user logged.
                localStorage.setItem('currentUser', JSON.stringify(data));
            }
            return data;
        }));
    }
    
    logout() {
        //remove user from local storage to log user out  localStorage.removeItem('sucursales');
        localStorage.clear();
    }
}

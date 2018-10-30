import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;
  public loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.user, this.model.password).subscribe(
    data => {
      this.loading = false;
      localStorage.setItem('userData', JSON.stringify(data.results[0].user));
      localStorage.setItem('idUser', JSON.stringify(data.results[0].user_id));
      if (data.results.length > 0) {
        for (const item of data.results[0].config) {
          localStorage.setItem('terminos', JSON.stringify(item.configuration.commercial_terms));
        }
      }
      for (const item of data.results) {
        localStorage.setItem('token', JSON.stringify(item.token));
      }
      this.router.navigate(['']);
    },
    error => {
      this.loading = false;
      console.log(error);
    });
  }

  OnDestroy(){

  }

}


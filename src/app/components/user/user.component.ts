import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: JSON;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers(){
    this.apiService.getUsers().subscribe(
      data => {
        this.users = data['results'];
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  deleteUser(id) {
    console.log(id);
  }

}

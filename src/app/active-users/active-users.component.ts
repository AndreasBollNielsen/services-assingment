import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../Services/usersService.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
   users: string[] = [];

  onSetToInactive(id: number) {
    this.myservice.AddToInactive(id);
  }

  constructor(private myservice: UsersServiceService){}

  ngOnInit(): void {
      this.users = this.myservice.activeUsers;
  }
}

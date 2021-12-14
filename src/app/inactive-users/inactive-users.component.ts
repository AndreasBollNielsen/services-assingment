import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersServiceService } from '../Services/usersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[] =[];

  onSetToActive(id: number) {
    this.myUserService.AddToActive(id);
  }

  constructor(private myUserService: UsersServiceService){};

  ngOnInit(): void {
      this.users = this.myUserService.inactiveUsers;
  }
}

import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './Services/usersService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  activeUsers: string[] = [];
  inactiveUsers: string[] = [];



  
}

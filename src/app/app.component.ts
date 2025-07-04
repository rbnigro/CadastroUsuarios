import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { GendersService } from './services/genders.service';
import { StatesService } from './services/states.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  usersList: any = [];
  gendersList: any = [];
  stateList: any = [];

  constructor(
    private readonly _userService: UsersService,
    private readonly _gendersService: GendersService,
    private readonly _statesService: StatesService,
  ) {}

  ngOnInit() {
      this.getUsers();
      this.getGenders();
      this.getStates();
  }

  getUsers() {
    this._userService.getUsers().subscribe((usersListResponse) => {
      this.usersList = usersListResponse;
    });
  }

  getGenders() {
    this._gendersService.getGenders().subscribe((gendersListResponse) => {
      this.gendersList = gendersListResponse;
    });
  }

  getStates() {
    this._statesService.getStates().subscribe((statesListResponse) => {
      this.stateList = statesListResponse;
    });
  }
}

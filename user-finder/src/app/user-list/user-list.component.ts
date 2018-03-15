import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user';
import { UserService } from '../services/user.service';

import { trigger, state, style, animate, transition } from '@angular/animations'; 

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {

  users: IUser[];
  filteredUsers: IUser[];
  _filterInput: string = "";
  clicked: boolean = false;
  country: string = "";
  prevId: number;

  get filterInput(): string{
    return this._filterInput;
  }
  set filterInput(value: string){
    this._filterInput = value;
    this.filteredUsers = this._filterInput ? this.userFilter(this._filterInput) : this.users;
  }

  constructor(private _users: UserService) {
   }

  ngOnInit() {
    this.users = this._users.getUsers();
    this.filteredUsers = this.users;
  }

  userFilter(filter: string): IUser[]{
    filter = filter.toLocaleLowerCase();
    return this.users.filter((user: IUser) => user.userName.toLocaleLowerCase().indexOf(filter) !== -1);
  }

  viewDetails(id: number): void{
    if(this.clicked && this.prevId == id){
      this.clicked = !this.clicked;
    }   
    else this.clicked = true;
    this.prevId = id;
    this.country = this.getUserCountry(id);
  }

  getUserCountry(id: number): string{
    return this.users.find((user : IUser) => user.userId == id).country;
  }

  closeDetails(): void{
    this.clicked = false;
  }

}

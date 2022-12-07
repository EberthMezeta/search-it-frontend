import { CurrentUser } from './../../interfaces/current-user';
import { CurrentUserService } from './../../services/current-user.service';
import { UserPostRequest } from './../../interfaces/user-post-request';
import { ResponsePostUsers } from './../../interfaces/response-post-users';
import { User } from './../../interfaces/user';
import { UsersService } from './../../services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-managment',
  templateUrl: './users-managment.component.html',
  styleUrls: ['./users-managment.component.css']
})
export class UsersManagmentComponent implements OnInit {

  public users !: User[];
  public current !: CurrentUser;

  constructor(private usersService: UsersService, private currentUserService: CurrentUserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.getCurrentUser();
  }

  public getUsers():void {
    this.usersService.getUsers().subscribe(
      (data : User[]) => {
        this.users = data;
        console.log(this.users);
      }
    );
  }

  public Create():void {

    let roles : string[] = [ "admin",
    "query",
    "upload"];
    let user : UserPostRequest = {
      username: "nelson",
      password: "nelson",
      roles: roles
    }

    this.usersService.postUsers(user).subscribe(
      (data ) => {
        console.log(data);
      }
    );
  }

  public Delete():void {
    let id  = this.users[6].id;
    this.usersService.deleteUsers(id).subscribe(
      (data ) => {
        console.log(data);
      }
    );
  }

  public Update():void {
    let id  = this.users[4].id;
    let roles : string[] = [ "admin",
    "query",
    'default-roles-spa-api'
    ];
    let user : User = {
      id: id,
      username: "paco",
      password: "manco",
      roles: roles,
    }

    this.usersService.putUsers(user).subscribe(
      (data ) => {
        console.log(data);
      }
    );
  }

  public getCurrentUser():void {
    this.currentUserService.getCurrentUser().subscribe(
      (data : CurrentUser) => {
        this.current = data;
        console.log(this.current);
      }
    );
  }

}

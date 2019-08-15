import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public mycolor = "red";

  public user = {
    name: 'John'
  };

  public users = [
    {name: 'John'},
    {name: 'Mary'},
    {name: 'Gary'},
    {name: 'Terry'}
  ];

  public selectedUser ;

  constructor() {}

  ngOnInit() {
  }

  changeColor(color) {
    this.mycolor = color;
  }

}

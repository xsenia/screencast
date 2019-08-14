import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user;

  public mycolor = "red";

  constructor() {

    setTimeout(() => {
      this.user = {
        name: 'John'
      };
    },2000);
    

  }

  ngOnInit() {
  }

  changeColor(color) {
    this.mycolor = color;
  }

}

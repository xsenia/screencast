import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user = {
    name: "John"
  };

  constructor() { }

  random() {
    return Math.random();
  }

  ngOnInit() {
  }

}

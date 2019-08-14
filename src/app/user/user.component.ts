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

  public myclass = "red";

  constructor() {

    setTimeout(() => {
        this.myclass="green";

        setTimeout(() => {
          this.myclass="blue";
      }, 2000);

    }, 2000);

  }

  random() {
    return Math.random();
  }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user;
  
  constructor() { }

  ngOnInit() {
  }

}

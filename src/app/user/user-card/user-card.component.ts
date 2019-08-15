import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'events'; - так ошибка почему?
// import { userInfo } from 'os';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  //@Input() user; сокращенная форма, если имя свойства класса совпадает с именем атрибута
  @Input('user') user; // ('user') - имя атрибута компонента
  @Output('userSelected') userSelected: EventEmitter<any> = new EventEmitter(); 

  constructor() {
    //console.log('constructor:', this.user);
  }

  ngOnInit() {
    //console.log('ngOnInit:', this.user);
  }

  selectUser () {
    this.userSelected.emit();
  }

}

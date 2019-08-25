import { Component, OnInit, Input } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  //@Input() user; сокращенная форма, если имя свойства класса совпадает с именем атрибута
  
  @Input('userAttribut') user; // ('userAttribut') - имя атрибута компонента

  @Input('carAttribut') car;   

  ngOnInit() {
    console.log('ngOnInit:', this.user);
  }

}

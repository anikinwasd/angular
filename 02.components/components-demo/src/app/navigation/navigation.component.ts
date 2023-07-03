import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isActive = false;
  inputValue = 'Hello';

  @Input('title') titleFromApp: string = '';
  @Output() onChildOutput = new EventEmitter<boolean>;

  ngOnInit() {
    console.log('navigation -> init');
  }

  ngAfterViewInit() {
    console.log('navigation -> After view init');
  }


  activeUsers = [
    { name: 'Mitko', age: 21 },
    { name: 'Pesho', age: 23 },
    { name: 'Maria', age: 24 },
    { name: 'Katya', age: 26 },
  ];

  handleClick(): void {
    this.isActive = !this.isActive;
    this.onChildOutput.emit(this.isActive);
  }
}

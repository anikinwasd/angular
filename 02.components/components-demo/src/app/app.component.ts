import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'title from AppComponent';

  onOutputFromChild() {
    console.log('onOutputFromChild');
  }
}

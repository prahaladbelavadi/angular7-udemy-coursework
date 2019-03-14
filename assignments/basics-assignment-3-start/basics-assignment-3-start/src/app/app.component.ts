import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
tog = false;
clickRec = [];
number = 0;

toggle(){
  this.tog = !this.tog;
  this.clickRec.push(Date())
  this.number++
}
}

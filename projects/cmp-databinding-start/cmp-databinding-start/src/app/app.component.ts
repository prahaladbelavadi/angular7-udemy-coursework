import { Component } from '@angular/core';
import { CockpitComponent } from "./cockpit/cockpit.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'testserver', content:'just a test!'}];

}

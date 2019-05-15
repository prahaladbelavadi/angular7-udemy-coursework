import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];

  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      'usernamee': new FormControl(null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    })
  }


}

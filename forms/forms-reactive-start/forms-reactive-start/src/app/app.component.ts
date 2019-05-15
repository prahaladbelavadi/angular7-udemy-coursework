import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genders = ['male', 'female'];

  signupForm: FormGroup;

  onSubmit(){
    console.log(this.signupForm)
  }


  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl (null),
      'email': new FormControl(null),
      'gender': new FormControl('male')
    })
  }


}

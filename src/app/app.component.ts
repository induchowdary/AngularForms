import { Component, Input } from '@angular/core';

@Component({
  selector: 'CustomizedComponent',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Welcome to my page';
//@Input('pfirstname') pfirstname = "Enter first name";

  log(x){
    console.log(x);
    console.log(x.valid);
  }
  submit(x)
  {
    console.log(x);
  }
  
}

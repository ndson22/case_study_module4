import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login =new FormGroup({
  account: new FormControl,
  password:new FormControl,
  role:new FormControl
});
  loginService: any;
  constructor() { }

  ngOnInit(): void {
  }
  submitLogin(){
    this.loginService.login(
      this.login.value.account,
      this.login.value.password,
      this.login.value.role
    )
    .subscribe(
      (data: { user: any; }) => {
        console.log(data.user);
      },
      (error: any) => console.log(error)
    );
  }
}

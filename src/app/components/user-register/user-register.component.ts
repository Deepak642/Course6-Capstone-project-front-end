import { Component, OnInit } from '@angular/core';
import {Register} from "../../common/register";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  register: Register = new Register();

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.register)
    this.saveRegistered();
  }

  saveRegistered(){
    this.registerService.createUserRegister(this.register).subscribe(data => {
        console.log(data);
        window.location.href="/login"
      return alert("Registered successfully.... Login and enjoy !!!");
      },
      error => console.log(error));
  }


}

import { Component, OnInit } from '@angular/core';
import {Register} from "../../common/register";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  register: Register = new Register();

  constructor(private registerService:RegisterService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.register)
    this.saveRegistered();
  }

  saveRegistered(){
    this.registerService.createAdminRegister(this.register).subscribe(data => {
        console.log(data);
        window.location.href="/adminlogin"
        return alert("Registered successfully.... Login and enjoy !!!");
      },
      error => console.log(error));
  }

}

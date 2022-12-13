import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private router:Router, private ds:DataService) { }
  loginForm=this.formbuilder.group({mail:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\@.]+')]],
num:['',[Validators.required,Validators.pattern('[0-9]+')]],
psd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\@#*_]+')]]})

  ngOnInit(): void {
  }
  login(){
    var num=this.loginForm.value.num
    var mail=this.loginForm.value.mail
    var psd=this.loginForm.value.psd
   
    // const result = this.ds.login(mail,num,psd)

   if(this.loginForm.valid){

    const result = this.ds.login(mail,num,psd)

     if(result){
       alert('Login success')
       this.router.navigateByUrl('home')
     }
   }
   else{
     alert('Invalid form')
   }
   
}
}

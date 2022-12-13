import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private router:Router,private ds:DataService) { }
  registerForm=this.formbuilder.group({user:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
                    mail:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\@.]+')]],
                  num:['',[Validators.required,Validators.pattern('[0-9]+')]],
                psd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9\@#*_]+')]]})
                  

  ngOnInit(): void {
  }
  register(){
    var user=this.registerForm.value.user
    var mail=this.registerForm.value.mail
    var num=this.registerForm.value.num
    var psd=this.registerForm.value.psd

    if(this.registerForm.valid){
      const result=this.ds.register(user,mail,num,psd)
      if(result){
        alert('successfully registered')
        this.router.navigateByUrl('')
      }
      else{
        alert('Already exist')
        this.router.navigateByUrl('')
      }
      
    }
    else{
      alert('invalid form')
    }
    
  }

}

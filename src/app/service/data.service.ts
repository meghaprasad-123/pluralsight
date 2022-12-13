import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentnum:any
  currentmail:any

  userDetails:any={
    8078:{username:'Megha',email:'megha@pd.com',number:8078,password:120},
    9447:{username:'Kannan',email:'kannanp.com',number:9447,password:123},
    8547:{username:'Priya',email:'priya@p.com',number:8547,password:120},
    9496:{username:'Karthi',email:'karthi.com',number:9496,password:143}
  }

  constructor() { 
    this.getData
  }

  saveData(){
    if(this.userDetails){
      localStorage.setItem('database',JSON.stringify(this.userDetails))
    }
    if(this.currentmail){
      localStorage.setItem('currentmail',JSON.stringify(this.currentmail))
    }
    if(this.currentnum){
      localStorage.setItem('currentnum',JSON.stringify(this.currentnum))
    }
  }

  getData(){
    if(localStorage.getItem('database')){
      this.userDetails=JSON.parse(localStorage.getItem('database') || '')
    }
    if(localStorage.getItem('currentmail')){
      this.currentmail=JSON.parse(localStorage.getItem('currentmail') || '')
    }
    if(localStorage.getItem('currentnum')){
      this.currentnum=JSON.parse(localStorage.getItem('currentnum') || '')
    }
  }

  register(username:any,email:any,number:any,password:any){
      var userDetails=this.userDetails
      if(number in userDetails){
        return false
      }
      else{
        userDetails[number]={username,email,number,password}
        this.saveData
       return true
      }
  }


  login(mail:any,num:any,psd:any){

    var userDetails=this.userDetails
    this.currentmail=userDetails[num]['email']
    this.currentnum=num

    if(num in userDetails){
        if(psd==userDetails[num]['password'] && mail==userDetails[num]['email']){
          this.currentnum=num
          this.currentmail=mail
          this.saveData()
           return true
        }
        else{
         alert('Please check your mail id and password')
         return false
        }
    }
    else{
     alert('Incorrect phone no')
     return false
    }
 }
}

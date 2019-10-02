import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Login and Register';
  tempArray = [];
  info:Array<{ username: string, password: string }> = [{
    username: 'Pearl',
    password: 'pearl31'
  },
  {
    username: 'Gayatri',
    password: 'gayatri01'
  },
  {
    username: 'Amisha',
    password: 'amisha26'
  }];


  addNewUser(username, password){
    if(username !== "" && password !== ""){
      this.info.push({ username: username, password: password});
      console.log('Username: '+username+'  Password: '+password);
      alert("Hey!! "+ username + " Registered Successfully!!!");
    }else{
      alert("Please fill the required details...");
    }
  }

  verifyUser(username, password){
    if(username !== "" && password !== ""){
      let flag = 0;
      for(let i = 0; i < this.info.length; i++){
        if(this.info[i].username == username && this.info[i].password == password){
          flag = 1;
          alert("Hey!! "+ username + " Logged Successfully!!!");
          break;
        }else if(this.info[i].username == username && this.info[i].password !== password){
          flag = -1;
          alert("Incorrect login credentials");
        }
      }
      if(flag == 0){
        alert("Please register to login");
      }
    }
  }

  onSubmit(value:any){

  }
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userhandling',
  templateUrl: './userhandling.component.html',
  styleUrls: ['./userhandling.component.css']
})
export class UserhandlingComponent implements OnInit {

  username = '';


  updateUsername(){

    this.username ='Clcik on button';
  }
  constructor() { 
   
  }

  ngOnInit() {
  }

}

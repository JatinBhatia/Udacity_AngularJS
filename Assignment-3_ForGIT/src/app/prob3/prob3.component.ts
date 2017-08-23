import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prob3',
  templateUrl: './prob3.component.html',
  styleUrls: ['./prob3.component.css']
})
export class Prob3Component implements OnInit {
  visible = true;
  clickLog=[];
  count =1;
  logTheclick(){
    
    this.visible = !this.visible;
    this.clickLog.push(this.count++);

  }
  getcolor(){
    return this.count>5 ? 'Blue':'White';
  }
  constructor() { }

  ngOnInit() {
  }

}

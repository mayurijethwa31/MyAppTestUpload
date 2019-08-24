import { Component, OnInit } from '@angular/core';
import { UtilServiceService } from '../util-service.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
myMsg: String = 'hello world in about us';
service = new UtilServiceService();
  constructor() { 
  }
  findMsg() {
    this.myMsg = this.service.getMessage();
  }
  ngOnInit() {
  }

}

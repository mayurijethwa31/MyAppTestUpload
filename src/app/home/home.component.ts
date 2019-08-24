import { Component, OnInit } from '@angular/core';
import { UtilServiceService } from '../util-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
service = new UtilServiceService();
  constructor() {
    
   }

  ngOnInit() {
    this.service.sendMessage("hello from home component");
  }

}

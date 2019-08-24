import { Component } from '@angular/core';
import { UtilServiceService } from './util-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  myMessage: String = 'hello world';
  service = new UtilServiceService()
  constructor() {
    
  }
  findMesg() {
    this.myMessage = this.service.getMessage();
  }
  
}

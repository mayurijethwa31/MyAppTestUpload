import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService implements OnInit {
message: String = "in service";
  

  sendMessage(msg) {
    debugger;
    this.message = msg;
  }

  getMessage() {
    debugger;
    return this.message;
  }
  ngOnInit() {
    
  }

}

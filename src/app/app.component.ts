import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game';
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  gameStarted(lastCounter : number){
    //console.log(lastCounter);
    if(lastCounter % 2 === 0){
      //even number
      this.evenNumbers.push(lastCounter);
    }
    else {
      //odd number
      this.oddNumbers.push(lastCounter);
    }
  }
}

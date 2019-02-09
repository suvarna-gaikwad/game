import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() gameStartedEvent = new EventEmitter<number>();
  interval;
  lastCounter = 1;

  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.interval = setInterval( () => {
      this.gameStartedEvent.emit(this.lastCounter++);
    }, 1000);
  }

  onStopGame(){
    clearInterval(this.interval);
    this.lastCounter = 1;
  }

}

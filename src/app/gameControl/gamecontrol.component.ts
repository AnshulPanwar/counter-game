import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-gamecontrol",
    templateUrl: './gamecontrol.component.html'
})

export class GamecontrolComponent {
    public start: string = "start game";
    public stop: string = "stop game";
    public count: number = 0;
    public interval;
    @Output() eventCreated = new EventEmitter<number>();
    constructor(){}

    public setCount(){
      this.interval = setInterval(() => {this.count += 1;
      this.eventCreated.emit(this.count + 1);
    
    },1000)
    }

    public clear(){
        clearInterval( this.interval);
        this.count = 0;
    }

    
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'counter-game';
  oddNumber: number[] = [];
  evenNumber: number[] = [];


  public intervalFired(interval: number){
    console.log(interval)
    if (interval % 2 == 0){
      this.evenNumber.push(interval);
    }else if (interval % 2 != 0){
      this.oddNumber.push(interval);
    }
  }
}

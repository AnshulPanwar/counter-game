import { Component, Input } from "@angular/core";

@Component({
    selector: "app-even",
    templateUrl: "./even.component.html"
})

export class EvenComponent {

    @Input() number: number;

    public evenArray = [2,4,6];

    constructor(){}

    
}
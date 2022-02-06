import {Component, Input, OnInit} from '@angular/core';
import {BW, Colors} from "../../interfaces/Generics";

@Component({
    selector: 'app-flower',
    templateUrl: './flower.component.html',
    styleUrls: ['./flower.component.scss']
})
export class FlowerComponent {

    @Input() color: string = BW.WHITE;

    constructor() {
    }

}

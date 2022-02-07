import {Component, Input, OnInit} from '@angular/core';
import {BW} from "../../interfaces/Generics";

@Component({
    selector: 'app-segment',
    templateUrl: './segment.component.html',
    styleUrls: ['./segment.component.scss']
})
export class SegmentComponent {

    @Input() color: string = BW.WHITE
    @Input() hideFlower: boolean = false;
    @Input() title: string = "";
    @Input() icon: string = "";
    @Input() class: string = "";
    @Input() nextColor: string = BW.WHITE
    @Input() seed: number = Math.floor(Math.random() * 100)


    constructor() {
    }

}

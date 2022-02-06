import {Component, OnInit} from '@angular/core';
import {Colors} from "../../interfaces/Generics";

@Component({
    selector: 'app-logo',
    templateUrl: './logo.component.html',
    styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

    readonly colors = Object.values(Colors)

    constructor() {
    }

    ngOnInit(): void {
    }

}

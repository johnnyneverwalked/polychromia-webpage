import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {Colors} from "./interfaces/Generics";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    readonly colors = Colors
    title = 'polychromia-webpage';

    constructor(private cd: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        this.cd.detectChanges()
    }
}

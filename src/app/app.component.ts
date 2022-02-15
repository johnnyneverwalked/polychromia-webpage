import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import {Colors} from "./interfaces/Generics";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
    readonly colors = Colors
    loaded: boolean = false;
    title = 'polychromia-webpage';

    constructor(private cd: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.loaded = true;
            this.cd.detectChanges()
        })
    }
}

import {AfterViewInit, ChangeDetectorRef, Component, HostListener} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
    public readonly buttons = [
        {title: "GOOGLE PLAY", href: ""},
        {title: "STEAM", href: ""},
        {title: "ITCH.IO", href: ""},
    ]

    public showMenu: boolean = false;

    @HostListener("window:resize")
    private onResize() {
        this.canShowMenu();
    }


    constructor(private cd: ChangeDetectorRef) {
    }

    ngAfterViewInit() {
        this.canShowMenu();
    }

    canShowMenu() {
        this.showMenu = document.body.offsetWidth < 600;
        this.cd.markForCheck();
    }

}

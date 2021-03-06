import {AfterViewInit, ChangeDetectorRef, Component, HostListener} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
    public readonly buttons: any[] = [
        {title: "GOOGLE PLAY", href: "https://play.google.com/store/apps/details?id=org.godotengine.polychromia", icon: "lab la-google-play"},
        {title: "STEAM", href: "https://store.steampowered.com/app/1909080/Polychromia", icon: "lab la-steam"},
        {title: "ITCH.IO", href: "https://johnnyneverwalked.itch.io/polychromia", icon: "lab la-itch-io"},
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
        this.showMenu = document.body.offsetWidth < 350;
        this.cd.markForCheck();
    }

}

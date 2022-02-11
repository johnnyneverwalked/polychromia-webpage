import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './components/logo/logo.component';
import { FlowerComponent } from './components/flower/flower.component';
import {NgObjectPipesModule} from "ngx-pipes";
import { SegmentComponent } from './components/segment/segment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatRippleModule} from "@angular/material/core";
import { GameComponent } from './components/game/game.component';
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    FlowerComponent,
    SegmentComponent,
    NavbarComponent,
    GameComponent
  ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        NgObjectPipesModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatRippleModule,
        MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

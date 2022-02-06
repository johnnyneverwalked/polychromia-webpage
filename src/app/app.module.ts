import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponent } from './components/logo/logo.component';
import { FlowerComponent } from './components/flower/flower.component';
import {NgObjectPipesModule} from "ngx-pipes";
import { SegmentComponent } from './components/segment/segment.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    FlowerComponent,
    SegmentComponent
  ],
    imports: [
        BrowserModule,
        NoopAnimationsModule,
        NgObjectPipesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

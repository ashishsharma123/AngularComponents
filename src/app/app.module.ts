import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';
import 'hammerjs';
import { MdSelectModule, MdButtonModule ,MdListModule,MdProgressSpinnerModule,MdToolbarModule,MdCardModule} from '@angular/material';
import { CustomSelect } from "./components/select/select.component";
import { FormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {MdAutocompleteModule} from '@angular/material';
import { CSSCarouselComponent } from "./components/carousel/carousel.component";


@NgModule({
  imports:      [ BrowserModule,BrowserAnimationsModule,MdSelectModule,FormsModule,MdButtonModule,
            MdListModule,MdProgressSpinnerModule,MdToolbarModule,InfiniteScrollModule,MdAutocompleteModule],
  declarations: [ AppComponent,CustomSelect,CSSCarouselComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
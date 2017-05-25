import { Component, Directive, HostListener } from '@angular/core';
import {FormControl} from '@angular/forms';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-component',
  styles: [
    `.search-results {
			height: 100%;
      //background-color:red;
			//overflow: scroll;
		}`
  ],
  templateUrl: 'src/app/app.html'

})



export class AppComponent {
  


  // @HostListener('window:scroll', ['$event'])
  // onScroll($event: Event): void {
  //   console.log("My scroll Fired...........");
  //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //     console.log("On Scroll Down");
  //     this.showLoader = true;
  //     setTimeout(() => {
  //       this.showLoader = false;
  //       for (let i = 0; i < 20; i++) {
  //         this.arr.push('new ' + this.arr.length);
  //       }
  //     }, 3000);
  //   }
  // }

  showLoader: boolean = false;
  arr = ['a', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'c', 'c', 'c', 'b', 'c', 'c',];

  constructor() {
    //firstevertest.printMsg();
  }
  selectedValue: any;
  selectedMultipleValue: any;
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  foods1 = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  setData(data: any) {
    console.log("called in app.ts " + data);
    this.selectedValue = data;
  }

  setMultipleData(data: any) {
    console.log("called in app.ts " + data);
    this.selectedMultipleValue = data;
  }

  onScrollDown() {
    console.log("On Scroll Down");
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
      for (let i = 0; i < 50; i++) {
        this.arr.push('new ' + this.arr.length);
      }
    }, 3000);
  }

  onScrollUp() {
    console.log('scrolled up!!')
  }

}
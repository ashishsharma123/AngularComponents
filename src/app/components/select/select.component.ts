import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'Custom-select',
    templateUrl: "src/app/components/select/select.html"

})
export class CustomSelect {

    //Array of Data to be Displayed.
    @Input() data: Array<any>;

    //Floated Lavel
    @Input() floatedLabel:boolean;

    //If true, the element can accept multiple values.
    @Input() isMultipleSelection: boolean;

    //value of ng-Model
    @Input() value: string;
    
    //The text to display when the select is empty.
    @Input() placeholder: string

    //css Class To apply on UI
    @Input() className:string;

    @Output() ngModelChange = new EventEmitter();
    
    
    

    getValue(e:any){
       console.log("getValue "+e); 
       this.ngModelChange.emit(e);
    }

    

}
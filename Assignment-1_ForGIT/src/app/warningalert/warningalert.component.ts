import { Component } from '@angular/core';

@Component({
    selector:'app-warning',
    template:`<h1>This is a warning</h1>`,
    styles:[`
    h1{
        color:red;
    }
    `]
})
export class WarningComponent{

}
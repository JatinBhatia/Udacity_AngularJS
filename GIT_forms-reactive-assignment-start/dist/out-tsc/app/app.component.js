var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "./custom-validators";
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.projectForm = new FormGroup({
            'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncinvalidProjectName),
            'email': new FormControl(null, [Validators.required, Validators.email]),
            'projectStatus': new FormControl('crtitcal')
        });
    };
    AppComponent.prototype.onSaveProject = function () {
        console.log(this.projectForm.value);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=D:/Angular/forms-reactive-assignment-start/forms-reactive-assignment-start/src/app/app.component.js.map
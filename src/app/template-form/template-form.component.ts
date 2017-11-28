import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(value: any, valid: boolean) {
    console.log(value);
    console.log(valid);
  }
  mobileValid:boolean=true;
  mobileUntouched:boolean=true;
  onMobileInput(form: NgForm) {
    if(form){
      this.mobileValid=form.form.get("mobile").valid;
      this.mobileUntouched=form.form.get("mobile").untouched;
    }
  }
}

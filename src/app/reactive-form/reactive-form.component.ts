import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  username: FormControl = new FormControl("aaa");
  formModel: FormGroup = new FormGroup({
    username: new FormControl("aaa"),
    dataRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl(),
    }),
    emails: new FormArray([
      new FormControl('a@a.com'),
      new FormControl('b@b.com'),
    ])
  });
  emails: FormArray = new FormArray([
    new FormControl('a@a.com'),
    new FormControl('b@b.com'),
  ])

  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.formModel.value);
  }
  addEmail():void{
    let emails=this.formModel.get('emails') as FormArray;
    emails.push(new FormControl(''));
  }

}

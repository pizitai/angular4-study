import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { equalValidator, mobileValidator } from "../validator/validators"

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.scss']
})
export class ReactiveRegistComponent implements OnInit {
  mobileValidator(control: AbstractControl): any {
    var myreg = /^1[3|4|5|8][0-9]\d{4,8}$/;
    let valid = myreg.test(control.value);
    console.log(`mobile的校验 ${control.value} 结果是： ${valid}`);
    return valid ? null : { mobile: true };
  }
  equalValidator(group: FormGroup): any {
    let password: FormControl = group.get('password') as FormControl;
    let pconfirm: FormControl = group.get('pconfirm') as FormControl;
    let valid: boolean = (password.value === pconfirm.value);
    console.log(`密码校验结果：` + valid);
    return valid ? null : { equal: true };
  }
  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', mobileValidator],
      passwordsGroup: fb.group({
        password: [''],
        pconfirm: ['']
      }, { validator: equalValidator })
    })
    // this.formModel = new FormGroup({
    //   username: new FormControl(),
    //   mobile: new FormControl(),
    //   passwordsGroup: new FormGroup({
    //     password: new FormControl(),
    //     pconfirm: new FormControl()
    //   })
    // })
  }
  onSubmit() {
    // let isValid: boolean = this.formModel.get('username').valid;
    // let errors: any = this.formModel.get('username').errors;
    // console.log('username的校验结果：' + isValid);
    // console.log('username的错误信息是：' + JSON.stringify(errors));
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

  ngOnInit() {
  }

}

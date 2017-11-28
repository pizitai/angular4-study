import { AbstractControl, FormGroup, FormControl } from "@angular/forms";

export function mobileValidator(control: AbstractControl): any {
    var myreg = /^1[3|4|5|8][0-9]\d{4,8}$/;
    let valid = myreg.test(control.value);
    console.log(`mobile的校验 ${control.value} 结果是： ${valid}`);
    return valid ? null : { mobile: true };
}
export function equalValidator(group: FormGroup): any {
    console.log('aaaaaaaaaaaaa');
    let password: FormControl = group.get('password') as FormControl;
    let pconfirm: FormControl = group.get('pconfirm') as FormControl;
    let valid: boolean = (password.value === pconfirm.value);
    console.log(`密码校验结果：` + valid);
    return valid ? null : { equal: true };
}
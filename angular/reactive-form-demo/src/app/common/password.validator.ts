import {AbstractControl} from '@angular/forms';

export function passwordValidator(control : AbstractControl): {[key: string] : any} | null{
    let pwd = control.get("pwd");
    let confirmPwd = control.get("confirmPwd");
    // if(pwd === null || confirmPwd === null){
    //     return null;
    // }
    if(confirmPwd?.pristine){
        return null;
    }
    if(pwd && confirmPwd && pwd?.value !== confirmPwd?.value){
        return {'misMatch':"Password doen't match"};
    }
    return null;
}


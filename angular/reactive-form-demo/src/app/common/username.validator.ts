import {AbstractControl, ValidatorFn} from '@angular/forms';

export function usernameValidator(control : AbstractControl): {[key: string] : any} | null{
    let result = /password/.test(control.value);
     if(result){
        return {'forbiddenName' : control.value};
     }
    return null;
}

export function usernameValidator2(pattern: RegExp) : ValidatorFn {
    return (control : AbstractControl) : {[key: string] : any} | null =>{
        let result = pattern.test(control.value);
        if(result){
            return {'forbiddenName' : control.value};
        }
        return null;
    }
}
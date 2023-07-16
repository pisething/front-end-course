import {AbstractControl} from '@angular/forms';

export function usernameValidator(control : AbstractControl): {[key: string] : any} | null{
    let result = /admin/.test(control.value);
     if(result){
        return {'forbiddenName' : control.value};
     }
    return null;
}
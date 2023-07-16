import { Component } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
import { usernameValidator } from './common/username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form-demo';

  constructor(private fb: FormBuilder){

  }

  get username(){
    return this.registrationForm.get('username');
  }

  registrationForm = this.fb.group({
    username : ['', [Validators.required, Validators.minLength(3), usernameValidator]],
    pwd : [],
    confirmPwd : [],
    address : this.fb.group({
      province : [],
      district : [],
      commune : []
    })
  });

  /*
  registrationForm = new FormGroup({
    username : new FormControl('Dara'),
    pwd : new FormControl(),
    confirmPwd : new FormControl(),
    address : new FormGroup({
      province : new FormControl(),
      district : new FormControl(),
      commune : new FormControl()
    })
    
  });

  */

  setTheValue(){
    this.registrationForm.patchValue({
      username : 'Thida',
      pwd:'t',
      confirmPwd: 't',
      address: {
        province: 'PP',
        district: 'BKK',
        commune: 'bkk1'
      }
    })
  }
}

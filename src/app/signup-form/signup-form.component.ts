import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent  {
  public form: FormGroup = new FormGroup({
    basicInfo: new FormControl(),
    addressInfo: new FormControl(),
    relativesInfo: new FormControl()
  });
  
  public onSubmit(){
    console.log("Val", this.form.value);
  }
}

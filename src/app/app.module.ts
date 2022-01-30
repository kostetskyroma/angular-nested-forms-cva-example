import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AddressInfoComponent } from './address-info/address-info.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { RelativesInfoComponent } from './relatives-info/relatives-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    AddressInfoComponent,
    SignupFormComponent,
    RelativesInfoComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

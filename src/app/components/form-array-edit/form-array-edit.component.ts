import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-array-edit',
  templateUrl: './form-array-edit.component.html',
  styleUrls: ['./form-array-edit.component.css'],
})
export class FormArrayEditComponent implements OnInit {
  addressForm: any;
  city: FormControl;
  state: FormControl;
  country: FormControl;
  list: any = [];
  adresse: any;
  fa: FormArray;

  listAddres: any = [
    { city: 'Dhaka', state: 'Dhaka', country: 'Bangladesh' },
    { city: 'Los Angeles', state: 'California ', country: 'USA' },
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addressForm = new FormGroup({
      adresses: this.formBuilder.array([]),
    });
    this.initFormArray(this.listAddres);
  }

  createForms(adresse: any): FormGroup {
    let formGroup: FormGroup = new FormGroup({
      city: new FormControl(adresse.city),
      state: new FormControl(adresse.state),
      country: new FormControl(adresse.country),
    });
    return formGroup;
  }

  initFormArray(adresse: any) {
    const formArray = this.addressForm.get('adresses') as FormArray;
    adresse.map((item: any) => {
      formArray.push(this.createForms(item));
    });
    this.addressForm.setControl('adresses', formArray);
  }

  removeEmailItem(index: number): void {
    const formArray = this.addressForm.get('adresses') as FormArray;
    formArray.removeAt(index);
  }

  add() {
    let formGroup: FormGroup = new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl(''),
    });
    const formArray = this.addressForm.get('adresses') as FormArray;
    formArray.push(formGroup);
  }

  finish() {
    console.log(this.addressForm.value);
    this.list = this.addressForm.value;
  }
}

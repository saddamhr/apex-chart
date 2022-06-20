import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css'],
})
export class FormArrayComponent implements OnInit {
  // myForm: FormGroup
  // emails: FormArray
  myForm: any
  emails: any

  constructor(
    private _fb: FormBuilder,
    private _snakBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.myForm = this._fb.group({
      name: '',
      emails: this._fb.array([ this.createEmail() ])
    })
  }

  createEmail():FormGroup {
    return this._fb.group({
      email: '',
      phone: ''
    })
  }

  addEmailItem():void {
    this.emails = this.myForm.get('emails') as FormArray
    this.emails.push( this.createEmail() )
  }

  removeEmailItem(index:number):void {
    this.emails = this.myForm.get('emails') as FormArray
    this.emails.removeAt(index)
  }

  save() {
    console.log(this.myForm.value)
    this._snakBar.open('Salvo com sucesso !', '', {duration: 2000})
  }
}

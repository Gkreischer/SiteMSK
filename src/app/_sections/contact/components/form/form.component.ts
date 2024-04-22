import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MaskitoOptions } from '@maskito/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;

  readonly phoneMask: MaskitoOptions = {
    mask: ({value}) => {
        const digitsCount = value.replaceAll(/\D/g, '').length;
      
        if(digitsCount === 10) {
          return ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        }

        return ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    },
  };

  constructor(
    private formBuilder: FormBuilder
  ) {
    
  }


  ngOnInit(): void {
    this.mountForm();
  }

  mountForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {

  }
}

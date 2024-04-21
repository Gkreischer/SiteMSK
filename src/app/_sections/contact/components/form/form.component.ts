import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    
  }


  ngOnInit(): void {
    this.mountForm();
  }

  mountForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.email, Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {

  }
}

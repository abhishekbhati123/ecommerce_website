import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, router: Router) {}

  ngOnInit() {
    this.userForm = this.formbuilder.group({
      name: ['', [Validators.required]],
      mobNumber: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.maxLength(3)]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      addLine1: ['', [Validators.required]],
      addLine2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      sender: ['', [Validators.required]],
      aboutYou: ['', [Validators.required]],
      uploadPhoto: ['', [Validators.required]],
    });
  }

  updateProfile() {}
}

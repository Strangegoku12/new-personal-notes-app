import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // typo fixed: styleUrl → styleUrls
})
export class LoginComponent {
  loginform: ReturnType<FormBuilder['group']>;

  constructor(private fb: FormBuilder) {
    this.loginform = this.fb.group({
      username: [''],
      password: ['']
    });
  }
  onSubmit() {
    console.log(this.loginform.value);
  }
}

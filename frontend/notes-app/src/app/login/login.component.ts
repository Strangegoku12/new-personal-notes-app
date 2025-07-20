import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { AuthApiService } from '../../services/auth-api.service';
import { CommonModule } from '@angular/common';
import { HotToastService } from '@ngxpert/hot-toast';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  

  onSubmit() {
        this.toast.warning('Boo!');

    if (this.loginform.invalid) {
      console.log('Form is invalid');
      return;
    }

    this._loadlogin.loginapi(this.loginform.value).subscribe({
      next: (res) => {
        console.log("Login successful:", res);
            this.toast.warning('Boo!');
      },
      error: (err) => {
        console.error("API error:", err);
      }
    });
  }
}

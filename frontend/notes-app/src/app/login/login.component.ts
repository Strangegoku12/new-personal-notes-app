import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthApiService } from '../../services/auth-api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // typo fixed: styleUrl → styleUrls
})
export class LoginComponent {
  loginform: ReturnType<FormBuilder['group']>;

  constructor(private fb: FormBuilder,private _loadlogin:AuthApiService) {
    this.loginform = this.fb.group({
      username: [''],
      password: ['']
    });
  }

 logindata() {
  this._loadlogin.loginapi(this.loginform.value).subscribe({
    next: (res) => {
      console.log("Login successful:", res);
      // maybe navigate or show success
    },
    error: (err) => {
      console.log("API error:", err);
      // show an error message to user
    }
  });
}

  onSubmit() {
    console.log(this.loginform.value);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      identifier: ['', [Validators.required]],  // اسم الحقل identifier بناءً على الـ API
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('تم تسجيل الدخول بنجاح:', response);

        // خزن التوكن في localStorage لو موجود
        if (response.token) {
          localStorage.setItem('token', response.token);
        }

        // توجه إلى الصفحة الرئيسية بعد تسجيل الدخول
        this.router.navigate(['/mainpage']);
      },
      error: (error) => {
        console.error('فشل تسجيل الدخول:', error);
        alert('فشل تسجيل الدخول. تأكد من البيانات المدخلة');
      }
    });
  }
}

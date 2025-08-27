import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit(): void {
  console.log('onSubmit fired');
  this.submitted = true;

  if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched();
    return;
  }

  this.authService.signup(this.registerForm.value).subscribe({
    next: (res) => {
      console.log('تم التسجيل بنجاح:', res);
      this.router.navigate(['/login']);
    },
    error: (err) => {
      console.error('فشل التسجيل:', err);
      alert('فشل في إنشاء الحساب. تأكد من صحة البيانات.');
    }
  });
}

}

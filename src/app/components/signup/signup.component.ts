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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

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
    const signupData = {
      name: this.registerForm.get('name')?.value,
      email: this.registerForm.get('email')?.value,
      phoneNumber: this.registerForm.get('phone')?.value,
      password: this.registerForm.get('password')?.value,
    };
    this.authService.signup(signupData).subscribe({
      next: (res) => {
        console.log('تم التسجيل بنجاح:', res);
        // swal.fire({
        //   title: "Good job!",
        //   text: "You clicked the button!",
        //   icon: "success"
        // });
        //alert(' تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن.');
        this.router.navigate(['/login']);
      },
      error: (err) => {


        //console.error('فشل التسجيل:', err);
        // alert(err.error.message);

      }
    });
  }


}
function swal(arg0: { title: string; text: string; icon: string; }) {
  throw new Error('Function not implemented.');
}


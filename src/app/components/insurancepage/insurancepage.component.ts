import { Component } from '@angular/core';

@Component({
  selector: 'app-insurancepage',
  templateUrl: './insurancepage.component.html',
  styleUrls: ['./insurancepage.component.scss']
})
export class InsurancepageComponent {
  insuranceTypes = [
    {
      imgSrc: 'assets/imgs/13.png',
      alt: 'سيارات زيرو',
      title: 'حماية الاسره ومسكنها'
    }, {
      imgSrc: 'assets/imgs/12.png',
      alt: 'الحوادث الشخصية',
      title: 'الحوادث الشخصية'
    }, {
      imgSrc: 'assets/imgs/11.png',
      alt: 'حماية الأسرة',
      title: 'سيارات زيرو'
    }
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
   menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
insuranceTypes = [
    {
      imgSrc: 'assets/imgs/11.png',
      alt: 'حماية الأسرة',
      title: 'سيارات زيرو'
    },
    {
      imgSrc: 'assets/imgs/12.png',
      alt: 'الحوادث الشخصية',
      title: 'الحوادث الشخصية'
    },
    {
      imgSrc: 'assets/imgs/13.png',
      alt: 'سيارات زيرو',
      title: 'حماية الاسره ومسكنها'
    }
  ];
  faqs = [
    {
      question: 'كيف اطلب وثيقة تأمين جديدة؟',
      answer: 'من خلال الضغط على زر "طلب تأمين جديد" في الصفحة الرئيسية',
      open: false
    },
    {
      question: 'كيف اطلب وثيقة تأمين جديدة؟',
      answer: 'من خلال الضغط على زر "طلب تأمين جديد" في الصفحة الرئيسية',
      open: false
    },
    {
      question: 'كيف اطلب وثيقة تأمين جديدة؟',
      answer:'من خلال الضغط على زر "طلب تأمين جديد" في الصفحة الرئيسية',
      open: false
    },
    {
      question: 'كيف اطلب وثيقة تأمين جديدة؟',
      answer: 'من خلال الضغط على زر "طلب تأمين جديد" في الصفحة الرئيسية',
      open: false
    }
  ];

  toggleAnswer(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }
  
}


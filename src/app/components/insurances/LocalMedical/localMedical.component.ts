import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeIndService } from 'src/app/services/home-ind.service';
import { MedicalIndividualService } from 'src/app/services/medical-individual.service';
import { PersonalAccidentService } from 'src/app/services/personal-accident.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
declare var $:any

@Component({
  selector: 'app-products',
  templateUrl: './localMedical.component.html',
  styleUrls: ['./localMedical.component.scss']
})
export class LocalMedicalComponent {
  type:any;
  target:any;
  imgSrc:any
  insuranceDescription:any='';
  AllCompaies:any;

  constructor(private _UserService:UserService, private _Router:Router, private _MedicalIndividualService:MedicalIndividualService
    ,private _HomeIndService:HomeIndService,private _PersonalAccidentService:PersonalAccidentService,private _ActivatedRoute:ActivatedRoute){
      this._ActivatedRoute.params.subscribe((data:any)=>{
        this.type = data.type
        this.target = data.target
      })
    }

  


  getInsuranceType(type:any){
    console.log(type);
    if(type=='companies'){
      $(".companies").show(500)
      $(".Indiviual").hide(500)
      this.insuranceDescription=' تقدم شركات التامين المتخصصة برامج تامين طبي فردية تلبى احتياجات المختلفة للأفراد يوفر لك التأمين الصحي دعم مادي تحتاجه بشدة في أوقات الطوارئ الطبية تتلقى الرعاية والعلاج في أشهر من أفضل المنشآت الطبية برامج تغطية تأمينية من أفضل الاسعار للعائلة بالكامل التغطيات: - تكاليف الإقامة في المستشفى. - تكلفة العمليات الجراحية من أجور الأطباء الأخصائيين والجراحيين وأطباء التخدير. - تكاليف العلاج خارج المستشفى من أجور الأطباء وتشخيص الأمراض بصور الأشعة والصور المقطعية والرنين المغناطيسي والفحوصات المخبرية المختلفة وتكلفة العلاج الطبيعي. صرف الأدوية - تغطية النظارة الطبية - تغطية علاج الأسنان - تغطية الحمل والولادة خدمة عملاء طوال اليوم على مدار أيام الأسبوع'
    }else if(type=='individual'){
      $(".Indiviual").show(500)
      $(".companies").hide(500)
      this.insuranceDescription=' تقدم شركات التامين المتخصصة برامج تامين طبي فردية تلبى احتياجات المختلفة للأفراد يوفر لك التأمين الصحي دعم مادي تحتاجه بشدة في أوقات الطوارئ الطبية تتلقى الرعاية والعلاج في أشهر من أفضل المنشآت الطبية برامج تغطية تأمينية من أفضل الاسعار للعائلة بالكامل التغطيات: - تكاليف الإقامة في المستشفى. - تكلفة العمليات الجراحية من أجور الأطباء الأخصائيين والجراحيين وأطباء التخدير. - تكاليف العلاج خارج المستشفى من أجور الأطباء وتشخيص الأمراض بصور الأشعة والصور المقطعية والرنين المغناطيسي والفحوصات المخبرية المختلفة وتكلفة العلاج الطبيعي. صرف الأدوية - تغطية النظارة الطبية - تغطية علاج الأسنان - تغطية الحمل والولادة خدمة عملاء طوال اليوم على مدار أيام الأسبوع'
    }
  }

  MedicalCompanyId:any;
  getMedicalCompany(e:any){
    this.MedicalCompanyId = e.target.value
  }
  goTo(){
    this._Router.navigate(['/CompanyHilthTypes/'+this.MedicalCompanyId])
  }
  getAllMedicalCompanies(){
    this._MedicalIndividualService.getAllMedicalCompanies().subscribe(data=>{
      console.log(data);
      this.AllCompaies = data;
    })
  }

 
  ngOnInit(): void {
    this.getInsuranceType(this.type)
    this.getAllMedicalCompanies()
    $("html , body").animate({scrollTop:0} ,0)
    // //////////
    $("input[type=date]").datepicker({
      dateFormat: 'yy-mm-dd',
      onSelect: function(dateText:any, inst:any) {
        $(inst).val(dateText); // Write the value in the input
      }
    });
    
    // Code below to avoid the classic date-picker
    $("input[type=date]").on('click', function() {
      return false;
    });//////////
  }
}

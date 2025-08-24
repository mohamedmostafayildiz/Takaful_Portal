import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from 'src/app/services/cars.service';
import Swal from 'sweetalert2';
declare var $:any

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  type:any;
  target:any;
  imgSrc:any
  carModels:any[]=[]
  carModelId:any
  AllBrands:any
  loading:boolean =false;
  insuranceDescription:any=''
  constructor(private _ActivatedRoute:ActivatedRoute, private _CarsService:CarsService,private _Router:Router){
    this._ActivatedRoute.params.subscribe((data:any)=>{
      this.type = data.type
      this.target = data.target
    })
  }

  AddCarForm:FormGroup= new FormGroup({
    'brand':new FormControl(''),
    'model':new FormControl(''),
    'manufacturingYear':new FormControl(''),
    'carPrice':new FormControl('')
  })
  getInsuranceType(type:any){
    console.log(type);
    if(type=='companies'){
      $(".companies").show(500)
      $(".Indiviual").hide(500)
      this.insuranceDescription='إذا كان عملك يعتمد على عدد كبير من السيارات وتعتبر هذه السيارات جزءًا أساسيًا من العمل، إذاً فتخفيض الخسائر أو الضرر التي قد تقع على هذه السيارات أمر بالغ الأهمية لنجاح عملك. مع برنامج السيارات التجارية (الأوتوبيسات والميكرو باصات والشاحنات والنقل الخفيف والمقطورات أو اللوارى) المرخصة والمملوكة لشركتكم الموقرة فسوف يتم تأمينها'
    }else if(type=='individual'){
      $(".Indiviual").show(500)
      $(".companies").hide(500)
      this.insuranceDescription='التأمين على السيارات لم يعد خيارًا؛ بل أصبح شرطًا أساسيًا لمن يرغب في مواجهة مخاطر الطريق  برامج شاملة لحماية سيارتك من مجموعة كبيرة من الاخطار. بدائل مواصلات عند اصلاح السيارة. إصلاح السيارة في مراكز الصيانة الرسمية. مساعدة مجانية على الطريق. متابعة التعويضات والحرص على ان يكون التعويض عادل وناجز.. التغطيات:  - التصادم أو الانقلاب بسبب حادث أو عطل ميكانيكي مفاجئ. - الفعل المتعمد من الغير بشرط ألا يكون المتسبب يعمل في خدمة المؤمن له أو كانت السيارة في عهدته أو حيازته او تحت سيطرته أو من أحد أفراد الأسرة. . الحريق أو الانفجار الخارجي أو الاشتعال الذاتي. . السطو او السرقة او الشروع فيهما. . الفعل المتعمد من الغير والذي يسبب ضرر بالسيارة.  '
    }
  }

  ///////// Individual Cars /////////////
  getCarBrand(target:any){
    let Exisit =  this.AllBrands.find((item:any)=>item.brandName==target.value);
    console.log(Exisit.carModels);
    this.carModels=Exisit.carModels;
  }
  getcarModel(e:any){
    console.log(e);
    let Exisit= this.carModels.find(item=>item.modelName==e.target.value)
    this.carModelId=Exisit.carModelId
    console.log(this.carModelId);
    
  }
  getcarManfacturingYear(e:any){
    $("#carPrice").show(400)
    $("#carSubmit").show(400)
    console.log(e);
  }
      //// Submit New Indiviual Car ////
  SubmitAddCar(){
    this.loading = true;
    let Model =Object.assign(this.AddCarForm.value,{userId:'78f20c72-a6ef-4237-8f21-0eb6510f4f22'})
    console.log(Model);
    this._CarsService.AddNewCar(Model).subscribe((res:any)=>{
      this.loading = false;
      console.log(res);
      this._Router.navigate(['/CarLeastPrice/'+res.carPrice+'/'+this.carModelId])
      Swal.fire('Good Job!','Your Data Added Successfully','success');
    },error=>{
      this.loading = false;
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.error,
      })
    })
  }

  getCarsBrands(){
    this._CarsService.getAllCarsInfo().subscribe(data=>{
      this.AllBrands=data
    },error=>{
      console.log(error);
    })
  }
  ngOnInit(): void {
    this.getInsuranceType(this.type)
    this.getCarsBrands()
    $("html , body").animate({scrollTop:0} ,0)
  }
}

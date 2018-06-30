import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, AlertController  } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.interface';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the SettingProfil2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-profil2',
  templateUrl: 'setting-profil2.html',
})
export class SettingProfil2Page {
  datePickerMin:string;
  datePicker: string;
  year:string = "Année";
  month:string = "Mois";
  day:string = "Jours";
  updateForm: FormGroup;
  user: User;
  userSubscription: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadCtrl: LoadingController,
    public userProvider: UserProvider,
    public alertCtrl: AlertController) {
      this.user = this.userProvider.getCurrentUser();
      const date = new Date();
      date.setFullYear(date.getFullYear()-5);
      const d = date.getDate();
      const day = d<10?"0"+d:d+"";
      const m = date.getMonth()+1;
      const month = m<10?"0"+m:m+"";
      this.datePickerMin = date.getFullYear() +"-"+month+"-"+ day;
      this.datePicker = this.changeDate(this.user.birthday);
      this.updateForm = formBuilder.group({
        firstName: [this.user.firstName, Validators.minLength(2)],
        lastName: [this.user.lastName, Validators.minLength(2)],
        email: ["", Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)],
        tel: [this.user.tel, Validators.minLength(8)],
        gov: [this.user.gov],
        bio: [this.user.bio],
        gender: [this.user.gender],
        birthday:[this.datePicker]
      });
  }
  ionViewDidLoad() {
    this.userSubscription = this.userProvider.observeUser().subscribe(user=>{
      this.user = this.userProvider.getCurrentUser(user);
      this.reset();
    });
  }
  ionViewWillLeave(){
    this.userSubscription.unsubscribe();
  }
  changeDate(val: any=this.datePicker){
    const date = new Date(val);
    const d = date.getDate();
    this.day = d<10?"0"+d:d+"";
    const m = date.getMonth()+1;
    this.month = m<10?"0"+m:m+"";
    this.year = date.getFullYear()+"";
    return this.year +"-"+this.month +"-"+this.day ;
  }
  setDate(picker){
    picker.open();
  }
  updateProfile(){
    const load = this.loadCtrl.create();
    load.present();
    const user :User ={
      firstName: this.updateForm.get("firstName").value,
      lastName: this.updateForm.get("lastName").value,
      tel: this.updateForm.get("tel").value,
      email: this.updateForm.get("email").value,
      gov: this.updateForm.get("gov").value,
      birthday: new Date(this.datePicker).getTime(),
      gender: this.updateForm.get("gender").value,
      bio: this.updateForm.get("bio").value
    } 
    user.firstName = user.firstName==""?this.user.firstName:user.firstName;
    user.lastName = user.lastName==""?this.user.lastName:user.lastName;
    user.tel = user.tel==""?this.user.tel:user.tel;
    const email = user.email==""?this.user.email:user.email;
    this.userProvider.updateProfile(user).then(()=>{
      load.dismiss();
      if(email!== this.user.email){
        const aleretCtrl = this.alertCtrl.create({
          title:"Sûr!!",
          message:"Entrez le mot de passe pour changer votre email",
          cssClass: "test",
          inputs: [
            {
              name: 'password',
              placeholder: '******',
              type: 'password'
            }
          ],
          buttons: [
            {
              text:'ok',
              handler: data => {
                console.log(data);
                const load = this.loadCtrl.create();
                load.present();
                this.userProvider.updateEmail(email, data.password)
                .then(()=>{
                  console.log("doneeeeeeeeeee");
                  load.dismiss();
                  aleretCtrl.dismiss();
                  console.log("doneeeeeeeeeee2222");
                }).catch(err=>{
                  console.log(err);
                  load.dismiss();
                  if(err.invalidPassword){
                    aleretCtrl.setMessage("Votre mot de pass est faux rentrez le mot de passe pour changer votre email");
                    data.password = "";
                  }else{
                    aleretCtrl.setTitle("Erreur");
                    aleretCtrl.setMessage("Quelque chose de mal s'il vous plaît essayer plus tard");
                    data.password = "";
                  }
                });
                return false;
              }
            },
            {
              text:'cancel',
              role:'cancel'
            }
          ]
        });
        aleretCtrl.present();
      }else{
        this.alertCtrl.create({
          title:"Profile mise a jour avec success",
        }).present();
      }
    }).catch(err=>{
      this.alertCtrl.create({
        title:"Erreur",
        message:"Quelque chose de mal s'il vous plaît essayer plus tard"
      }).present();
    });
  }
  reset(){
    console.log(this.user);
    this.updateForm.get("gender").setValue(this.user.gender);
    this.updateForm.get("firstName").setValue(this.user.firstName);
    this.updateForm.get("lastName").setValue(this.user.lastName);
    this.updateForm.get("email").setValue(this.user.email);
    this.updateForm.get("gov").setValue(this.user.gov);
    this.updateForm.get("bio").setValue(this.user.bio);
    this.datePicker = this.changeDate(this.user.birthday);
  }
  back(){
    this.navCtrl.pop();
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the SettingSecurityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-security',
  templateUrl: 'setting-security.html',
})
export class SettingSecurityPage {
  updateForm: FormGroup;
  constructor(public navCtrl: NavController,
    public userProvider: UserProvider,
    public formBuilder: FormBuilder,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
    this.updateForm = formBuilder.group({
      newPassword: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      reNewPassword: ["", Validators.compose([Validators.required, Validators.minLength(6)])],
      oldPassword: ["", Validators.compose([Validators.required, Validators.minLength(6)])]
    }, {
        validator: this.matchPassword
      });
  }
  matchPassword(abstarctCtrl) {
    let password = abstarctCtrl.get('newPassword').value;
    let confirmPassword = abstarctCtrl.get('reNewPassword').value;
    abstarctCtrl.get('reNewPassword').setErrors(null);
    if (password === confirmPassword) {
      return null
    }
    abstarctCtrl.get('reNewPassword').setErrors({ isMatch: true });
  }
  updatePassword() {
    const oldPassword = this.updateForm.get("oldPassword").value;
    const newPassword = this.updateForm.get("newPassword").value;
    const load = this.loadCtrl.create();
    load.present();
    this.userProvider.updatePassWord(oldPassword, newPassword)
      .then(() => {
        load.dismiss();
        this.alertCtrl.create({
          title:"Votre mot de passe a été changé avec succès",
          buttons:[{
            text: 'Ok',
            role: 'cancel',
            handler: () => {
              this.back();
            }
          }]
        }).present();
      })
      .catch((err) => {
        load.dismiss();
        console.log(err);
        this.alertCtrl.create({
          title:err.code == "auth/wrong-password"?null:"ERREUR",
          message:err.code == "auth/wrong-password"?"Vérifier votre mot de passe":err.message,
          buttons:['Ok']
        }).present();
      });
  }
  back() {
    this.navCtrl.pop();
  }
}

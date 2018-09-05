import { MyTastesPage } from "./../pages/my-tastes/my-tastes";
import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LandingPage } from "../pages/landing/landing";
import { TabsPage } from "../pages/tabs/tabs";

import { HomePage } from '../pages/home/home';

import { BlockPage} from '../pages/block/block'
import {SettingProfil2Page } from '../pages/setting-profil2/setting-profil2'
import {SettingSecurityPage} from '../pages/setting-security/setting-security'
import {ProfilPage} from '../pages/profil/profil';
import {PersonalHistoryPage} from '../pages/personal-history/personal-history';
import {FriendProfilPage } from '../pages/friend-profil/friend-profil';
import {FriendFollowPage} from '../pages/friend-follow/friend-follow';
import { PopupPage} from '../pages/popup/popup';
import {EventPage} from '../pages/event/event';
import {UpdateProgramPage} from "../pages/update-program/update-program";
import {DislikeListPage} from '../pages/dislike-list/dislike-list';
import {SpaceDetailPage} from '../pages/space-detail/space-detail';
import {SpaceDetailOpinionsPage} from '../pages/space-detail-opinions/space-detail-opinions';
import {SpaceDetailFeedback1Page} from '../pages/space-detail-feedback1/space-detail-feedback1';
import {SpaceDetailFeedback2Page} from '../pages/space-detail-feedback2/space-detail-feedback2';
import {SpaceDetailFeedback3Page} from '../pages/space-detail-feedback3/space-detail-feedback3';
import {NotificationsPage} from '../pages/notifications/notifications';
import {NotificationsSettingPage} from '../pages/notifications-setting/notifications-setting';
import {ContactUsPage} from '../pages/contact-us/contact-us';
import {ContactUsConversatoinPage} from '../pages/contact-us-conversatoin/contact-us-conversatoin';
import {MyMessagesPage} from '../pages/my-messages/my-messages';
import {PrincipalEventPage} from '../pages/principal-event/principal-event';
import {SpecialForYouPage} from '../pages/special-for-you/special-for-you';

//space
import {SpaceSettingPage} from '../pages/space-setting/space-setting';
import {SapceSetting2Page} from '../pages/sapce-setting2/sapce-setting2';
import {SpaceSecurityPage} from '../pages/space-security/space-security';
import {SpaceCategorySpecialtyPage} from '../pages/space-category-specialty/space-category-specialty';
import {SpaceUpdatePicCategoryPage} from '../pages/space-update-pic-category/space-update-pic-category';
import {SchedulePage} from '../pages/schedule/schedule';
import {SpaceContactUsPage} from '../pages/space-contact-us/space-contact-us';
import {SpaceConversationPage} from '../pages/space-conversation/space-conversation';
import {SpaceHistoryPage} from '../pages/space-history/space-history';
import {SpaceListFollowersPage} from '../pages/space-list-followers/space-list-followers';
import {SpaceReportPopupPage} from '../pages/space-report-popup/space-report-popup';
import {SpaceFeedbackPage} from '../pages/space-feedback/space-feedback';
import {SpaceReplyPopupPage} from '../pages/space-reply-popup/space-reply-popup';
import {SpaceNotificationPage} from '../pages/space-notification/space-notification';

import { UserProvider } from '../providers/user/user';


@Component({
  templateUrl: "app.html"
})
export class MyApp {
  // = ProfilPage

  rootPage: any=SpaceNotificationPage;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public userProvider: UserProvider
  ) {
 

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.userProvider.isConnect(state=>{
      if(state){
        //  this.rootPage = TabsPage;
      }else{
        //  this.rootPage = LandingPage;
      }
    });
  }
}

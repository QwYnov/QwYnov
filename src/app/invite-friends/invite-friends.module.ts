import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InviteFriendsPageRoutingModule } from './invite-friends-routing.module';

import { InviteFriendsPage } from './invite-friends.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InviteFriendsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InviteFriendsPage]
})
export class InviteFriendsPageModule {}

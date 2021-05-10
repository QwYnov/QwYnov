import { AuthenticationService } from './../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-invite-friends',
  templateUrl: './invite-friends.page.html',
  styleUrls: ['./invite-friends.page.scss'],
})
export class InviteFriendsPage implements OnInit {
  formFriend: FormGroup;
  searchingFriends;
  invitedFriend = [];

  constructor(
    public viewCtrl: ModalController,
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore,
    private authService: AuthenticationService
  ) {
    this.formFriend = this.formBuilder.group({
      search: ['', Validators.required],
    });
  }
  ngOnInit() {}


  ngAfterContentInit() {
    this.authService.userDetails().subscribe((user) => {
      this.firestore
        .collection('users')
        .doc(user.uid)
        .valueChanges()
        .subscribe((res) => {
          this.invitedFriend.push({id: res['id'], pseudo: res['pseudo']})
        });
    });
  }

  dismiss() {
    this.viewCtrl.dismiss(this.invitedFriend);
  }

  close() {
    this.viewCtrl.dismiss()
  }

  searchFriend(pseudo) {
    this.firestore
      .collection('users', (ref) => ref.where('pseudo', '==', pseudo.search))
      .valueChanges()
      .subscribe((res) => {
        this.searchingFriends = res;
      });
  }

  addFriend(friend) {
    this.invitedFriend.push({ id: friend.id, pseudo: friend.pseudo });
    this.formFriend.value.search = '';
  }

  removeFriend(friend) {
    let index = this.invitedFriend
      .map(function (item) {
        return item.id;
      })
      .indexOf(friend.id);
    this.invitedFriend.splice(index, 1);
  }
}

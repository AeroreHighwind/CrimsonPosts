import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private _firestore = inject(Firestore);
  private _userProfileCollectionRef = collection(this._firestore, 'userProfiles')

  ngOnInit(): void {
    this.createUserProfile()
  }
  createUserProfile() {
    return addDoc(this._userProfileCollectionRef, { user: "hellAAAAAAAo" });
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tripiou';
  items: Observable<any[]>;
  constructor(db: AngularFirestore,public router: Router){
this.items = db.collection('items').valueChanges();
  }
}
